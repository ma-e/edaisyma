const LOCAL_STORAGE_WISHLIST_KEY = 'mae_wishlist_v1';

export function loadWishlist() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify([]));
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveWishlist(items) {
  try {
    localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(items));
  } catch {}
}

export function addWishlistItem({ name, image }) {
  const current = loadWishlist();
  const nextId = current.reduce((maxId, item) => Math.max(maxId, Number(item.id) || 0), 0) + 1;
  const newItem = {
    id: nextId,
    name: String(name || '').trim() || 'Untitled',
    image: String(image || '').trim(),
    date: new Date().toISOString().slice(0, 10),
  };
  const updated = [newItem, ...current];
  saveWishlist(updated);
  return newItem;
}
