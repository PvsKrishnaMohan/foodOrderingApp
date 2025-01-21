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
    <div className="flex justify-between lg:bg-pink-200 shadow-lg sm:bg-yellow-300 bg-green-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4"><Link to = "/">Home</Link></li>
          <li className="px-4"><Link to = "/about">About Us</Link></li>
          <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
          <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button onClick={()=> setLogin(!login)}>{login? "Login" : "LogOut"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
