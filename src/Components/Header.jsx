import React from "react";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://res.cloudinary.com/krishnamohan479/image/upload/v1736535011/foodapp-removebg_twvwgv.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
