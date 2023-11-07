import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/bannerPng.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import swal from "sweetalert";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const [mainUser, setMainUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, loading } = useContext(AuthContext);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        navigate(location.state ? location?.state : "/");
        swal("Hello there", "Login successful", "success");
        setMainUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    console.log(form);
    signInUser(email, password)
      .then((result) => {
        navigate(location.state ? location?.state : "/");
        return swal("Hello there", "Login successful", "success");
        // console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        swal("incorrect password or email");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Delights || Login</title>
      </Helmet>
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
              <form onSubmit={handleLogin} className="my-6">
                <input
                  className="p-2 px-4 my-2 w-full rounded-full focus:outline-blue-600"
                  placeholder="Email"
                  type="email"
                  name="email"
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
        <div className="flex items-center justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn border-none bg-[#00FFE1] rounded-none items-center"
          >
            <FaGoogle className="text-2xl"></FaGoogle>
            Google
          </button>
          {/* <p>{mainUser.displayName}</p>
        <img src={mainUser.photoURL} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
