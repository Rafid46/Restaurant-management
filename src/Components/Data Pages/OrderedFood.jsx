/* eslint-disable react/jsx-key */
// import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer";
import burger from "../../assets/11787888_2450.png";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../Provider.jsx/AuthProvider";

const OrderedFood = () => {
  const { user, loading } = useContext(AuthContext);
  const { email } = useParams();
  const [foodss, setFoodss] = useState([]);
  // const orderedFood = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5008/api/purchaseFood/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodss(data);
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
      });
  }, [user.email, loading]);

  console.log(foodss);
  // const [meal, setMeal] = useState({ orderedFood });
  const [meal, setMeal] = useState([]);
  // const { _id } = orderedFood;
  // console.log(orderedFood);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5008/api/purchaseFood/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMeal(meal.filter((item) => item._id !== _id));
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="bg-gray-950">
        <NavBar></NavBar>
      </div>
      <div>
        <p className="text-4xl font-bold text-center text-green-600">
          MY ORDERED FOODS
        </p>
        {foodss.map((food) => (
          <div className="w-full max-w-[1000px] mx-auto p-4 bg-transparent rounded-lg shadow sm:p-8 ">
            <div className="grid grid-cols-1 gap-5">
              <ul role="list" className="">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={food.image}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate \">
                        {food.yourName}
                      </p>
                      <p className="text-sm text-gray-900">{food.email}</p>
                      <p className="text-sm text-gray-900">{food.date}</p>
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      <p className="uppercase font-semibold">
                        {" "}
                        {food.foodiName}
                      </p>
                      <p> {food.price}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn"
                    >
                      DELETE
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderedFood;
