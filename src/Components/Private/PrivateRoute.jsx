/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import burger from "../../assets/burg.png";
import { AuthContext } from "../Provider.jsx/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    // return <span className="loading loading-spinner text-accent"></span>;
    return (
      <div
        className="loader  rounded-full w-screen h-screen animate-spin
aspect-square  flex justify-center items-center text-yellow-700"
      >
        <img src={burger} className="w-[80px] h-[80px]" alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
