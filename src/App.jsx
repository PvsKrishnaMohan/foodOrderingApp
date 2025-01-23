
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Outlet} from "react-router-dom"
import userContext from "./Utils/UserContext";
import { useState, useEffect } from "react";

const App = ()  => {
  const [userData, setUserData] = useState();
  useEffect(()=>{
    const data = {
      userName : "krishna Mohan"
    }
    setUserData(data.userName)
  },[])
  return (
    <>
      <div className="app">
        <userContext.Provider value={{userName : userData, setUserData}}>
          <Header/>
          <Outlet/>
        </userContext.Provider>
        {/* <Body/> */}
      </div>
    </>
  );
}

export default App

