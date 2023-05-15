import React from 'react';
import chapelImage from '../images/kings_college_chapel.jpg'; // Replace with your image path

function Header() {
  return (
    <header>
      <img src={chapelImage} alt="King's College Chapel" className="header-image" />
      <div className="title-email">
        <h1>Aarjav Jain</h1>
        <p>aarjav.jain@gmail.com</p>
      </div>
    </header>
  );
}

export default Header;