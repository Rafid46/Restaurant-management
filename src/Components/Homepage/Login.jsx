import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/bannerPng.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      //   style={{ backgroundImage: `url(${bannerImage})` }}
      className="bg-cover bg-center h-[1000px] max-w-10xl mx-auto bg-gray-900"
    >
      <NavBar></NavBar>
      <div className="">
        <div className="flex items-center justify-center">
          <div className="card rounded-lg w-72">
            <h1 className="text-center font-bold text-3xl text-white">
              L O G I N
            </h1>
            <form className="my-6">
              <input
                className="p-2 px-4 my-2 w-full rounded-full focus:outline-blue-600"
                placeholder="Email"
                type="email"
                name="name"
              ></input>
              <input
                className="p-2 px-4 my-2 w-full  rounded-full focus:outline-blue-600"
                placeholder="Password"
                type="password"
                name="password"
              ></input>
              <button className="w-full bg-orange-500 h-[40px] my-3 rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-[#ffffff] font-medium">
                L O G I N
              </button>
            </form>
            <p className="text-center text-gray-200">
              Do not have an account,
              <span>
                {" "}
                <Link className="text-[#00FFE1] ml-2" to="/register">
                  Register
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
