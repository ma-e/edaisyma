import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import styles from './Wishlist.module.css';

interface WishlistItem {
  id: number;
  name: string;
  image_url: string;
  price: number;
  size: string;
  color: string;
}

const Wishlist: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [name, setName] = useState('');
  const [image_url, setImage] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [filter, setFilter] = useState('All');

  const BACKEND_URL = 'https://edaisymanosql.onrender.com/wishlist';
  const VENMO_USERNAME = "woo-lala";

  // Fetch wishlist items
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(BACKEND_URL);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error('Failed to fetch wishlist', err);
      }
    };
    fetchWishlist();
  }, []);

  // Add new item
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image_url || !price || !size || !color) return;

    const newItem = { name, image_url, price, size, color };

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) throw new Error('Failed to save item');

      const savedItem = await res.json();
      setItems([...items, savedItem]);

      // Reset form fields
      setName('');
      setImage('');
      setPrice(0);
      setSize('');
      setColor('');
    } catch (err) {
      console.error(err);
    }
  };

  // Delete item
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${BACKEND_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error('Failed to delete item');

      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Redirect user to Venmo
  const handleCardClick = (item: WishlistItem) => {
    if (isAdmin) return; // admin should NOT open Venmo
    const venmoUrl = `https://venmo.com/${VENMO_USERNAME}?txn=pay&amount=${item.price}&note=${encodeURIComponent(item.name)}`;
    window.open(venmoUrl, "_blank");
  };

  // Filtered items
  const filteredItems = items.filter(item => {
    const price = item.price;

    switch (filter) {
      case "0":
        return price >= 0 && price < 100;
      case "100":
        return price >= 100 && price < 500;
      case "500":
        return price >= 500 && price < 2000;
      case "2000":
        return price >= 2000;
      default:
        return true; // "All"
    }
  });


  return (
    <div className={styles.wishlistPage}>
      <h1 className={styles.wishlistTitle}>WISHLIST</h1>
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="0">0-100 </option>
        <option value="100">100-500 </option>
        <option value="500">500-2000 </option>
        <option value="2000">2000+ </option>
      </select>

      {/* Admin Add Form */}
      {isAdmin && (
        <form onSubmit={handleAdd} className={styles.wishlistForm}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Image URL" value={image_url} onChange={e => setImage(e.target.value)} />
          <input type="number" placeholder="Price" value={price} onChange={e => setPrice(Number(e.target.value))} />
          <input type="text" placeholder="Size" value={size} onChange={e => setSize(e.target.value)} />
          <input type="text" placeholder="Color" value={color} onChange={e => setColor(e.target.value)} />
          <button type="submit">Add Item</button>
        </form>
      )}

      {/* Grid Items */}
      <div className={styles.itemsGrid}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => !isAdmin && handleCardClick(item)}
            style={{ cursor: isAdmin ? "default" : "pointer" }}
          >
            <img src={item.image_url} alt={item.name} className={styles.cardImage} />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>

            {isAdmin && (
              <button
                className={styles.deleteButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
            )}

            {!isAdmin && (
              <button
                className={styles.venmoButton}
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering card click twice
                  handleCardClick(item);
                }}
              >
                Spoil Me 
              </button>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};

export default Wishlist;
