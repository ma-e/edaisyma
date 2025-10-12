import seedBlogs from './Blogs';

const LOCAL_STORAGE_BLOGS_KEY = 'mae_blogs_v1';

function getTodayIsoDate() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function loadBlogs() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_BLOGS_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_BLOGS_KEY, JSON.stringify(seedBlogs));
      return [...seedBlogs];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...seedBlogs];
    return parsed;
  } catch {
    return [...seedBlogs];
  }
}

export function saveBlogs(blogs) {
  try {
    localStorage.setItem(LOCAL_STORAGE_BLOGS_KEY, JSON.stringify(blogs));
  } catch {}
}

export function addBlog({ title, cover, content }) {
  const current = loadBlogs();
  const nextId = current.reduce((maxId, post) => Math.max(maxId, Number(post.id) || 0), 0) + 1;
  const newPost = {
    id: nextId,
    title: String(title || '').trim() || 'Untitled',
    cover: String(cover || '').trim(),
    date: getTodayIsoDate(),
    content: String(content || '').trim(),
  };
  const updated = [newPost, ...current];
  saveBlogs(updated);
  return newPost;
}
