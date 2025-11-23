import React, { useEffect, useState } from 'react';
import styles from './Comment.module.css';

interface Comment {
  id: number;
  comment: string;
  name: string;
}

const Comment: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('https://edaisyma.onrender.com/comments/');
      if (!res.ok) throw new Error('Failed to fetch comments');
      const data: Comment[] = await res.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    setSubmitting(true);

    try {
      const res = await fetch('https://edaisyma.onrender.com/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 0, name, comment: text }),
      });
      if (!res.ok) throw new Error('Failed to post comment');

      const newComment: Comment = await res.json();
      setComments([newComment, ...comments]); // Add new comment to top
      setName('');
      setText('');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className={styles.commentPage}>Loading comments...</p>;

  return (
    <div className={styles.commentPage}>
      <h1>Comments</h1>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.textarea}
        />
        <button type="submit" disabled={submitting} className={styles.button}>
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {comments.length === 0 ? (
        <p className={styles.noComments}>No comments yet.</p>
      ) : (
        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <p className={styles.commentText}>{comment.comment}</p>
              <span className={styles.commentAuthor}>— {comment.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comment;
