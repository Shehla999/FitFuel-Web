import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
