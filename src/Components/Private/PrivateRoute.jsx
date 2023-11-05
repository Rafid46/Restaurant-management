/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import burger from "../../assets/11787888_2450.png";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    // return <span className="loading loading-spinner text-accent"></span>;
    return (
      <div
        className="loader border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
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
