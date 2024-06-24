import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> &#x1F60D; &#x1F496; &#x1F43C; &#x1F431;</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        <i class="fas fa-bars"></i> 
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/work">WORK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">RESUME</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Menu;
