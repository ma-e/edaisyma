import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li><a href="/"></a></li>
        <li><a href="/">MAE</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/blog">Blog</a></li>
        {/* <li><a href="/contact">Contact</a></li> */}
        <li><a href="/gallery">Gallery</a></li>
        {/* <li><a href="/ideas">Ideas</a></li> */}
      </ul>
    </div>
  );
};

export default Menu;
