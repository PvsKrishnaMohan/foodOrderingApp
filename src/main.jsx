import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Body from "./Components/Body.jsx";
import Restaurants from "./Components/Restaurants.jsx";
import Cart from "./Components/Cart.jsx";
// import Grocery from "./Components/Grocery.jsx";
import StudentTable from "./Components/table.jsx";
import TablePractice from "./Components/TablePractice.jsx";
const Grocery = lazy(() => import("./Components/Grocery.jsx"));
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/table",
        element: <StudentTable />,
      },
      {
        path: "/practice",
        element: <TablePractice />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 className="text-3xl font-bold">Loading ...</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
