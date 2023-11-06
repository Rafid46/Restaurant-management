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
          <li className="text-2xl mr-20 font-thin text-orange-600">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-thin text-orange-600">
            <NavLink
              to="/allFood"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              ALL FOOD
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-thin text-orange-600">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              BLOG
            </NavLink>
          </li>
          <li className="text-2xl mr-20  font-thin text-orange-600">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : "text-white"
              }
            >
              LOGIN
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
              <div className="dropdown dropdown-hover">
                <img
                  className="rounded-full w-[40px] h-[40px] mr-2"
                  src={user.photoURL}
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-gray-500 hover:text-orange-500 hover:bg-gray-300">
                    <Link>
                      {" "}
                      <a>My added food items</a>
                    </Link>
                  </li>

                  <li className="text-gray-500  hover:text-orange-500 hover:bg-gray-300">
                    <Link to="/addProduct">
                      <a>Add a food item</a>
                    </Link>
                  </li>

                  <li className="text-gray-500  hover:text-orange-500 hover:bg-gray-300">
                    <Link to="myOrderedFood">
                      <a>My ordered food items</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-2xl font-thin text-white mr-2">
                {user.displayName}
              </p>
              <button
                onClick={handleSignOut}
                className="btn rounded-none coolBeans hover:text-orange-500"
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
