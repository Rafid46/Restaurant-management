import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import swal from "sweetalert";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        return swal("", "Logout successfully", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <div>
      <div className="mt-10 mb-10">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <li className="text-2xl mr-20 font-bold text-orange-600">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-bold text-orange-600">
            <NavLink
              to="/allFood"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              All Food
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-bold text-orange-600">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-bold text-orange-600">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              Login
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
  return (
    <div className="">
      <div className="navbar mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
            <p className="text-4xl font-bol text-[#00FFE1] font-Com"></p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar">
          {/* <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          ></label> */}
          {user ? (
            <div>
              <img
                className="rounded-full w-[40px] h-[40px] mr-2"
                src={user.photoURL}
              />
              <p className="text-2xl font-thin text-white mr-2">
                {user.displayName}
              </p>
              <button
                onClick={handleSignOut}
                className="btn rounded-none w-[130px] hover:text-orange-500"
              >
                L O G O U T
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn coolBeans rounded-none hover:text-orange-500">
                  L o g i n
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
