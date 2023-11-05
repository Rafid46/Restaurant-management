import { Link, Navigate } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  //   const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault(e);
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);

    setRegisterError("");
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("password should have capital letters");
      // return swal("Good job!", "You clicked the button!", "success");
    } else if (/^[a-zA-Z0-9]*$/.test(password)) {
      setRegisterError("password should have special character");
      return;
    } else {
      swal("Good job!", "account created succesfully", "success");
    }
    // update user
    createUser(email, password).then((result) => {
      updateUser(name, photo).then(() => {
        console.log(result);
        const userName = result.user?.displayName;
        const dp = result.user?.photoURL;
        const user = { email, userName: userName, dp: dp };
        fetch("http://localhost:5008/api/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        // Navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
        <div className="flex items-center justify-center">
          <div className="card px-8 py-6 rounded-lg  w-80">
            <h1 className="text-center font-bold text-3xl text-orange-300">
              R E G I S T E R
            </h1>
            <form onSubmit={handleSignUp} className="my-6">
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
                name="email"
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
            {registerError && <p className="text-red-600">{registerError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
