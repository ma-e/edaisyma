import React, { useMemo, useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';
import './BlogList.css';
import './Wishlist.css';
import { useAuth } from './AuthContext';
import { addWishlistItem, loadWishlist } from './wishlistStorage';

const VENMO_HANDLE = 'woo-lala';
const VENMO_URL = `https://venmo.com/${VENMO_HANDLE}`;

const Wishlist = () => {
  const { isLoggedIn } = useAuth();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [version, setVersion] = useState(0);

  const items = useMemo(() => loadWishlist(), [version]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!isLoggedIn) return;
    const created = addWishlistItem({ name, image });
    setName('');
    setImage('');
    setVersion((v) => v + 1);
    alert(`Added wishlist item #${created.id}`);
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
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <button type="submit">Add</button>
          </form>
        )}

        <div className="blog-grid">
          {items.map((item) => (
            <div key={item.id} className="blog-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
              <img src={item.image} alt={item.name} className="blog-image" />
              <p className="blog-date">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
