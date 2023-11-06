import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Homepage/Home.jsx";
import MainLayOut from "./Components/MainLayOut.jsx";
import AllFood from "./Components/Homepage/AllFood.jsx";
import Blog from "./Components/Homepage/Blog.jsx";
import Login from "./Components/Homepage/Login.jsx";
import Register from "./Components/Homepage/Register";
import AuthProviders from "./Components/Provider.jsx/AuthProvider.jsx";
import ErrorPage from "./Components/Error/ErrorPage.jsx";
import AddProduct from "./Components/Data Pages/AddProduct.jsx";
import Details from "./Components/Details.jsx";
import FoodPurchase from "./Components/Private/FoodPurchase.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allFood",
        element: <AllFood></AllFood>,
        loader: () => fetch("http://localhost:5008/api/foods"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5008/api/foods/${params.id}`),
      },
      {
        path: "purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5008/api/foods/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
