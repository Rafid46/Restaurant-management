/* eslint-disable react/jsx-key */
// import { useLoaderData, useParams } from "react-router-dom";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer";
import burger from "../../assets/burg.png";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import banner from "../../assets/vintage-old-rustic-cutlery-dark.jpg";
import { Helmet } from "react-helmet-async";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../Provider.jsx/AuthProvider";

const OrderedFood = () => {
  const { user, loading } = useContext(AuthContext);
  // const { email } = useParams();
  const [foodss, setFoodss] = useState([]);

  // const [meal, setMeal] = useState(foodss);
  // const orderedFood = useLoaderData();

  useEffect(() => {
    fetch(
      `https://restaurent-management-server.vercel.app/api/purchaseFood/?email=${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodss(data);
        if (loading) {
          return (
            <div className="loader  rounded-full w-screen h-screen animate-spin aspect-square flex justify-center items-center text-yellow-700">
              <img src={burger} className="w-[80px] h-[80px]" alt="" />
            </div>
          );
        }
      });
  }, [user.email, loading]);

  console.log(foodss);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Want to remove from cart",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://restaurent-management-server.vercel.app/api/purchaseFood/${_id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (loading) {
              return (
                <div className="loader  rounded-full w-screen h-screen animate-spin aspect-square  flex justify-center items-center text-yellow-700">
                  <img src={burger} className="w-[80px] h-[80px]" alt="" />
                </div>
              );
            }
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
              setFoodss(foodss.filter((item) => item._id !== _id));
            }
          });
      }
    });
  };
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Helmet>
        <title>Delights || my ordered food</title>
      </Helmet>
      <div className="pb-3">
        <NavBar></NavBar>
      </div>
      <div className="mt-20">
        <p className="text-4xl font-bold text-center text-green-600">
          MY ORDERED FOODS
        </p>
        <div className="mb-5 mt-10 ">
          {foodss.map((food) => (
            <div className="w-1/2 mb-5 shadow-lg backdrop-blur-sm bg-opacity-20 bg-white mx-auto rounded-lg">
              <div className="grid grid-cols-1">
                <ul role="list" className="">
                  <li className="">
                    <div className="flex items-center">
                      <div className="">
                        <img
                          className="w-[300px] h-[180px] object-cover rounded-lg rounded-tr-none rounded-br-none"
                          src={food.image}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ml-5">
                        {/* <p className="text-sm font-medium text-gray-900 truncate \">
                          {food.yourName}
                        </p> */}
                        {/* <p className="text-sm text-gray-900">{food.email}</p> */}
                        <p className="text-sm text-gray-900">{food.date}</p>
                      </div>
                      <div className="text-base font-semibold text-gray-900">
                        <p className="text-2xl font-bold text-orange-400">
                          {" "}
                          {food.foodiName}
                        </p>
                        <p className="text-2xl font-semibold text-green-600">
                          {" "}
                          {food.price}
                        </p>
                        <p className="text-gray-200">
                          Quantity: {food.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="text-3xl mx-5 cursor-pointer text-red-500"
                      >
                        <IoIosRemoveCircleOutline />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderedFood;
