import { useContext, useEffect, useState } from "react";
import burger from "../../assets/burg.png";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";
import NavBar from "../NavBar.jsx/NavBar";
import { Link } from "react-router-dom";
const MyAddedFood = () => {
  const [foodss, setFoodss] = useState([]);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://restaurent-management-server.vercel.app/api/addedFood/?email=${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodss(data);
        if (loading) {
          return (
            <div
              className="loader  rounded-full w-screen h-screen animate-spin
aspect-square  flex justify-center items-center text-yellow-700"
            >
              <img src={burger} className="w-[80px] h-[80px] gap" alt="" />
            </div>
          );
        }
      });
  }, [user.email, loading]);
  //   const { _id } = foodss;
  return (
    <div>
      <div>
        <Helmet>
          <title>Delights || my ordered food</title>
        </Helmet>
        <div className="bg-gray-950">
          <NavBar></NavBar>
        </div>
        <div>
          <p className="text-4xl font-bold text-center text-green-600">
            MY ORDERED FOODS
          </p>
          <div className="mt-10 mb-10 gap-5">
            {foodss.map((food) => (
              <div
                key={food._id}
                className="w-full max-w-[1000px] mx-auto p-4 bg-transparent rounded-lg shadow sm:p-8  "
              >
                <div className="grid grid-cols-1 gap-5">
                  <ul role="list" className="">
                    <li className="py-3 sm:py-4 ">
                      <div className="flex items-center space-x-4 ">
                        <div className="flex-shrink-0">
                          <img
                            className="w-[80px] h-[80px] rounded-full"
                            src={food.image}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-2xl font-bold text-gray-900">
                            {food.foodName}
                          </p>
                          <p className="text-sm text-gray-900">{food.date}</p>
                        </div>
                        <div className="text-base font-semibold text-gray-900 flex flex-col justify-center items-center">
                          <p className="text-orange-600 text-2xl font-bold">
                            ${food.price}
                          </p>
                          <Link to={`/updateFood/${food._id}`}>
                            <button className="buttom mt-5">UPDATE</button>
                          </Link>
                        </div>
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
    </div>
  );
};

export default MyAddedFood;
