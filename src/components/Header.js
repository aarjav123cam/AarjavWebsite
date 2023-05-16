import React from 'react';
import pepys from '../images/pepys_building.jpg'; // Replace with your image path

function Header() {
  return (
    <header>
    
    <a href="https://en.wikipedia.org/wiki/Pepys_Library" target="_blank" rel="noopener noreferrer">
    <img src={pepys} alt="Pepys Building" className="header-image" />
    </a>
      <div className="title-email">
        <h1>Aarjav Jain</h1>
        <p>aarjav.jain@gmail.com</p>
      </div>
    </header>
  );
}

export default Header;