import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';
import './BlogList.css';
import './Wishlist.css';
import { useAuth } from './AuthContext';
import { addWishlistItem, subscribeWishlist } from './wishlistStorage';

const VENMO_HANDLE = 'woo-lala';
const VENMO_URL = `https://venmo.com/${VENMO_HANDLE}`;

const Wishlist = () => {
  const { isLoggedIn } = useAuth();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeWishlist((rows) => setItems(rows));
    return () => unsubscribe && unsubscribe();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!isLoggedIn) return;
    (async () => {
      const created = await addWishlistItem({ title, image, color, size, price });
      setTitle('');
      setImage('');
      setColor('');
      setSize('');
      setPrice('');
      alert(`Added wishlist item #${created.id}`);
    })();
  };

  const handleCardClick = (item) => {
    const url = `${VENMO_URL}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="wishlist-page">
        <Menu />

        {isLoggedIn && (
          <form onSubmit={handleCreate} className="create-post-form">
            <h3>Add Wishlist Item</h3>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <input
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Price (USD)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        )}

        <div className="blog-grid">
          {items.map((item) => (
            <div key={item.id} className="blog-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
              <img src={item.image} alt={item.title} className="blog-image" />
              <p className="blog-date">{item.title}</p>
              <div className="wishlist-meta">
                {(item.color || item.size) && (
                  <p className="wishlist-variant">{[item.color, item.size].filter(Boolean).join(' / ')}</p>
                )}
                {typeof item.price === 'number' && item.price > 0 && (
                  <p className="wishlist-price">${item.price.toFixed(2)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
