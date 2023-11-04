import { Link } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";

const Register = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <NavBar></NavBar>
        <div className="flex items-center justify-center">
          <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
            <h1 className="text-center font-bold text-3xl text-white">
              R E G I S T E R
            </h1>
            <form className="my-6">
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Name"
                type="text"
                name="name"
              ></input>
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Photo"
                type="text"
                name="photo"
              ></input>
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Email"
                type="email"
                name="name"
              ></input>
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Password"
                type="password"
                name="password"
              ></input>
              <button className="w-full h-[40px] bg-slate-500 my-3 rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#ffffff] font-medium">
                R E G I S T E R
              </button>
            </form>
            <p className="text-center text-gray-200">
              Already have an account,
              <span>
                {" "}
                <Link className="text-[#00FFE1] ml-2" to="/login">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
