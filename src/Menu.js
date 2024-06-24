import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <a class="navbar-brand display-0" href="/"> &#x1F60D; &#x1F496; &#x1F43C; &#x1F431;</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav" style={{ position: 'sticky', top: 0, height: 'calc(100vh - 56px)', overflowY: 'auto', backgroundColor: '#ffffff' }}>
  <ul className="navbar-nav">
  <li className="nav-item">
      <a className="nav-link" href="/work" style={{ color: '#212529' }}>WORK</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="/about" style={{ color: '#212529' }}>ABOUT <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/resume" style={{ color: '#212529' }}>RESUME</a>
    </li>

  </ul>
</div>





      {/* <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/about">ABOUT <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/work">WORK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/resume">RESUME</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/publications">PUBLICATIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gallery">GALLERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/classroom">PROJECTS</a>
          </li>

        </ul>
      </div> */}
    </nav>
  );
};

export default Menu;
