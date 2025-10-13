import blogsFallback from './Blogs';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

function getTodayIsoDate() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export async function loadBlogs() {
  try {
    const response = await fetch(`${API_BASE}/blogs`);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    // Fallback to admin's static JSON bundled in the app
    return Array.isArray(blogsFallback) ? blogsFallback : [];
  }
}

export async function loadBlogById(id) {
  try {
    const response = await fetch(`${API_BASE}/blogs/${encodeURIComponent(id)}`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    // Fallback to admin's static JSON bundled in the app
    const numericId = Number(id);
    const match = Array.isArray(blogsFallback)
      ? blogsFallback.find((b) => String(b.id) === String(id) || b.id === numericId)
      : null;
    return match || null;
  }
}

export async function addBlog({ title, cover, content }) {
  const newPost = {
    title: String(title || '').trim() || 'Untitled',
    cover: String(cover || '').trim(),
    date: getTodayIsoDate(),
    content: String(content || '').trim(),
  };
  try {
    const response = await fetch(`${API_BASE}/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) throw new Error('Failed to create blog');
    const created = await response.json();
    return created;
  } catch {
    return null;
  }
}
