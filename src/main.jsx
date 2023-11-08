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
import OrderedFood from "./Components/Data Pages/OrderedFood.jsx";
import MyAddedFood from "./Components/Data Pages/MyAddedFood.jsx";
import { HelmetProvider } from "react-helmet-async";
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
        path: "/allFood",
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
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
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
      {
        path: "/myOrderedFood",
        element: (
          <PrivateRoute>
            <OrderedFood></OrderedFood>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:5008/api/purchaseFood"),
      },
      {
        path: "/myAddedFood",
        element: (
          <PrivateRoute>
            <MyAddedFood></MyAddedFood>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:5008/api/addedFood"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
