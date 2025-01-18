
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Outlet} from "react-router-dom"


const App = ()  => {

  return (
    <>
      <div className="app">
        <Header/>
        <Outlet/>
        {/* <Body/> */}
      </div>
    </>
  );
}

export default App

