
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Outlet} from "react-router-dom"
import userContext from "./Utils/UserContext";
import { useState, useEffect, useContext } from "react";

const App = ()  => {
  const [userData, setUserData] = useState();
  useEffect(()=>{
    const data = {
      userName : ""
    }
    setUserData(data.userName)
  },[])

  const {userName} = useContext(userContext)
  console.log(userName,"kmp")
  return (
    <>
      <div className="app">
        <userContext.Provider value={{userName : userName}}>
          <Header/>
          <userContext.Provider value = {{userData, setUserData}}>
          <Outlet/>
          </userContext.Provider>
        </userContext.Provider>
        {/* <Body/> */}
      </div>
    </>
  );
}

export default App

