import React, { useEffect, useState } from "react";
import  LOGO_URL  from "../Utils/Constants";
import{Link} from 'react-router-dom'
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState(false)
  // useEffect is rendered everytime => if there is no dependency 
  // useEffect is called once => if there is a empty dependency []
  // useEffect is called everytime if dependency changes [login]
  useEffect(()=>{
    console.log("useEffect called!")
  },[])
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"} </li>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={()=> setLogin(!login)}>{login? "Login" : "LogOut"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
