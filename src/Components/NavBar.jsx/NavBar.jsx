import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import swal from "sweetalert";
import { motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 1.8,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: 0.5 }}
    >
      <>
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between mt-6">
          <li className="text-xl mr-10 font-thin text-white">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 text-xl "
                  : "hover:text-orange-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl mr-10  font-thin text-white">
            <NavLink
              to="/allFood"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 text-xl "
                  : "hover:text-orange-400"
              }
            >
              All Item
            </NavLink>
          </li>
          {/* <li className="text-2xl mr-10  font-thin">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-white"
              }
            >
              BLOG
            </NavLink>
          </li> */}
          <li className="text-xl mr-10  font-thin text-white">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 text-xl "
                  : "hover:text-orange-400"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="text-xl mr-10  font-thin text-orange-600">
            <NavLink
              to="/myOrderedFood"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white text-2xl"
                  : "hover:text-orange-400"
              }
            >
              <FiShoppingCart />
            </NavLink>
          </li>
        </nav>
      </>
    </motion.div>
  );
  return (
    <div className="">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="w-[100px]">
            <img src={logo} className="w-[50px]" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <summary tabIndex={0} className="btn btn-ghost rounded-btn">
                  <div className="">
                    <div className="">
                      {user?.photoURL ? (
                        <div className="flex items-center justify-evenly">
                          <p className="text-white mr-5 border-2 border-opacity-30 border-gray-200 rounded-full px-5 py-2">
                            {user?.displayName}
                          </p>
                          <img
                            className="rounded-full w-[40px] border-black"
                            src={user?.photoURL}
                          />
                        </div>
                      ) : (
                        <div className="text-3xl">
                          <FaRegUserCircle />
                        </div>
                      )}
                    </div>
                  </div>
                </summary>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 text-sm w-52 mt-4"
                >
                  <div className="bg-gray-900 font-thin rounded-lg">
                    <li>
                      <a className="cursor-none">{user?.displayName}</a>
                    </li>
                    <Link>
                      <li className="flex justify-between text-sm ">
                        <button
                          className="text-white hover:text-amber-500"
                          onClick={handleSignOut}
                        >
                          Logout
                          <IoMdLogOut className="ml-20" />
                        </button>
                      </li>
                    </Link>
                    <hr className="w-10/12 mx-auto border-gray-400 border-opacity-30 my-4" />
                    <li className="text-gray-100 hover:text-orange-500 text-sm">
                      <Link to="/myAddedFood">
                        <a>My added food items</a>
                      </Link>
                    </li>
                    <li className="text-gray-100 hover:text-orange-500">
                      <Link to="/myOrderedFood">
                        <a>My ordered food</a>
                      </Link>
                    </li>
                    <li className="text-gray-100 hover:text-orange-500">
                      <Link to="/addProduct">
                        <a>Add food</a>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
