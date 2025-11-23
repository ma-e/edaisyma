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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/comments/');
        console.log({ res });
        if (!res.ok) throw new Error('Failed to fetch comments');
        const data: Comment[] = await res.json();
        console.log("Data", data);
        setComments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) return <p className={styles.commentPage}>Loading comments...</p>;

  return (
    <div className={styles.commentPage}>
      <h1>Comments</h1>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
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
