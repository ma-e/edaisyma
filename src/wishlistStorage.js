import { getFirestoreDbOrNull } from './firebaseClient';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';

const LOCAL_STORAGE_WISHLIST_KEY = 'mae_wishlist_v1';

function normalizeItem(raw) {
  const title = String(raw.title ?? raw.name ?? 'Untitled').trim();
  const image = String(raw.image ?? '').trim();
  const color = String(raw.color ?? '').trim();
  const size = String(raw.size ?? '').trim();
  const priceNum = typeof raw.price === 'number' ? raw.price : Number(raw.price || 0);
  let date = raw.date;
  if (!date && raw.createdAt && typeof raw.createdAt === 'object' && typeof raw.createdAt.toDate === 'function') {
    try {
      date = raw.createdAt.toDate().toISOString().slice(0, 10);
    } catch {}
  }
  return {
    id: String(raw.id ?? ''),
    title,
    image,
    color,
    size,
    price: isNaN(priceNum) ? 0 : priceNum,
    date: date || new Date().toISOString().slice(0, 10),
  };
}

function normalizeItems(items) {
  return (Array.isArray(items) ? items : []).map(normalizeItem);
}

export async function loadWishlist() {
  const db = getFirestoreDbOrNull();
  if (db) {
    try {
      const qy = query(collection(db, 'wishlistItems'), orderBy('createdAt', 'desc'));
      const snap = await getDocs(qy);
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      return normalizeItems(rows);
    } catch {
      // fall through to local storage
    }
  }

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify([]));
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return normalizeItems(parsed);
  } catch {
    return [];
  }
}

export function saveWishlist(items) {
  try {
    localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(items));
  } catch {}
}

export async function addWishlistItem({ title, name, image, color, size, price }) {
  const db = getFirestoreDbOrNull();
  const safeTitle = String(title ?? name ?? '').trim() || 'Untitled';
  const safeImage = String(image || '').trim();
  const safeColor = String(color || '').trim();
  const safeSize = String(size || '').trim();
  const safePrice = Number(price || 0);

  if (db) {
    try {
      const ref = await addDoc(collection(db, 'wishlistItems'), {
        title: safeTitle,
        image: safeImage,
        color: safeColor,
        size: safeSize,
        price: isNaN(safePrice) ? 0 : safePrice,
        createdAt: serverTimestamp(),
      });
      return {
        id: ref.id,
        title: safeTitle,
        image: safeImage,
        color: safeColor,
        size: safeSize,
        price: isNaN(safePrice) ? 0 : safePrice,
      };
    } catch {
      // fall back to local storage
    }
  }

  const current = normalizeItems(await loadWishlist());
  const nextId = current.reduce((maxId, item) => Math.max(maxId, Number(item.id) || 0), 0) + 1;
  const newItem = normalizeItem({
    id: nextId,
    title: safeTitle,
    image: safeImage,
    color: safeColor,
    size: safeSize,
    price: isNaN(safePrice) ? 0 : safePrice,
    date: new Date().toISOString().slice(0, 10),
  });
  const updated = [newItem, ...current];
  saveWishlist(updated);
  return newItem;
}

export function subscribeWishlist(onItems) {
  const db = getFirestoreDbOrNull();
  if (db) {
    try {
      const qy = query(collection(db, 'wishlistItems'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(
        qy,
        (snapshot) => {
          const rows = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          onItems(normalizeItems(rows));
        },
        () => {
          // On error, fallback to local storage load
          (async () => onItems(await loadWishlist()))();
        }
      );
      return unsubscribe;
    } catch {}
  }

  // Local fallback: emit immediately and sync across tabs via storage events
  let isActive = true;
  (async () => {
    if (!isActive) return;
    onItems(await loadWishlist());
  })();
  const handler = async (e) => {
    if (e.key === LOCAL_STORAGE_WISHLIST_KEY) {
      onItems(await loadWishlist());
    }
  };
  window.addEventListener('storage', handler);
  return () => {
    isActive = false;
    window.removeEventListener('storage', handler);
  };
}
