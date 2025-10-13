const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

export async function loadWishlist() {
  try {
    const response = await fetch(`${API_BASE}/wishlist`);
    if (!response.ok) throw new Error('Failed to fetch wishlist');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
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
    return null;
  }
}
