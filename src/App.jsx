import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
import userContext from "./Utils/UserContext";
import { useState, useEffect, useContext } from "react";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import { TestContextProvider } from "./Utils/TestContext";

const App = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const data = {
      userName: "",
    };
    setUserData(data.userName);
  }, []);

  const { userName } = useContext(userContext);

  return (
    <>
      <div className="app">
        <Provider store={AppStore}>
          <TestContextProvider>
            <userContext.Provider value={{ userName: userName }}>
              <Header />
              <userContext.Provider value={{ userData, setUserData }}>
                <Outlet />
              </userContext.Provider>
            </userContext.Provider>
            {/* <Body/> */}
          </TestContextProvider>
        </Provider>
      </div>
    </>
  );
};

export default App;
