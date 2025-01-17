import React, { useState } from "react";
import  LOGO_URL  from "../Utils/Constants";

const Header = () => {
  const [login, setLogin] = useState(false)
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={()=> setLogin(!login)}>{login? "Login" : "LogOut"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
