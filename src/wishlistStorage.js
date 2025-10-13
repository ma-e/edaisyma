const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

const LOCAL_STORAGE_WISHLIST_KEY = 'mae_wishlist_items_v1';

function readLocalWishlist() {
  try {
    const raw = (typeof localStorage !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY)) || '[]';
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalWishlist(items) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(items));
    }
  } catch {
    // ignore write errors
  }
}

function getNextLocalId(existingItems) {
  const existingIds = existingItems
    .map((item) => (typeof item.id === 'number' ? item.id : 0))
    .filter((id) => Number.isFinite(id));
  const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
  const nextBySequence = maxId + 1;
  const nextByTime = Date.now();
  return Number.isFinite(nextBySequence) && nextBySequence > 0 ? nextBySequence : nextByTime;
}

export async function loadWishlist() {
  try {
    const response = await fetch(`${API_BASE}/wishlist`);
    if (!response.ok) throw new Error('Failed to fetch wishlist');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    // Fallback to local storage when API is unavailable
    return readLocalWishlist();
  }
}

export async function addWishlistItem({ name, image }) {
  const newItem = {
    name: String(name || '').trim() || 'Untitled',
    image: String(image || '').trim(),
    date: new Date().toISOString().slice(0, 10),
  };
  try {
    const response = await fetch(`${API_BASE}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) throw new Error('Failed to create wishlist item');
    const created = await response.json();
    return created;
  } catch {
    // Fallback to local storage when API is unavailable
    const existing = readLocalWishlist();
    const created = { id: getNextLocalId(existing), ...newItem };
    writeLocalWishlist([created, ...existing]);
    return created;
  }
}
