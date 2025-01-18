import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Body from "./Components/Body.jsx";
import Restaurants from "./Components/Restaurants.jsx";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restaurants/:id',
        element: <Restaurants/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
