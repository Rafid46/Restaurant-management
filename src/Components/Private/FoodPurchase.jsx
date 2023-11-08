import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import burger from "../../assets/burg.png";
import Swal from "sweetalert2";
import swal from "sweetalert";
const FoodPurchase = () => {
  const food = useLoaderData();
  console.log(food);
  const { user, loading } = useContext(AuthContext);
  //   console.log(food);
  const { foodName, image, price } = food;
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const yourName = form.yourName.value;
    const email = form.email.value;
    const foodiName = form.foodName.value;
    const date = form.buyingDate.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const image = form.image.value;
    const foods = { yourName, email, price, quantity, image, date, foodiName };
    console.log(foods);
    //         const userName = result.user?.displayName;
    //         const userEmail = result.user?.email;
    //    const user = { userEmail:userEmail, userName:userName, };
    fetch("http://localhost:5008/api/purchaseFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foods),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        if (data.insertedId) {
          swal("Food purchased", "enjoy your meal", "success");
        }
        form.reset();
      });
  };
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Delights || food purchase</title>
      </Helmet>
      <div className="bg-gray-900">
        <NavBar></NavBar>
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl lg:text-6xl">
              Delicious Delights. Order Your Favorites Now
            </h1>
            <p className="mt-3 text-lg text-gray-500 font-semibold">
              Your Table Awaits: Order Online Today
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              {/* input field */}
              <div className="flex flex-col items-center justify-center">
                {/* form */}
                <form onSubmit={handleAdd}>
                  <div className="w-full sm:w-auto">
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="yourName"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder={user.displayName}
                        value={user.displayName}
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="email"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder={user.email}
                        value={user.email}
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="price"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder="price"
                        value={price}
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="date"
                        id="hero-input"
                        name="buyingDate"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder="date"
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="foodName"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder="name of the food"
                        value={foodName}
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="quantity"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder="quantity"
                      />
                    </label>
                    <label className="mb-5">
                      <input
                        type="text"
                        id="hero-input"
                        name="image"
                        className="mb-5 py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                        placeholder="image"
                        value={image}
                      />
                    </label>
                  </div>
                  <div>
                    {food.quantity < 1 ? (
                      (swal("can not purchase", "no food", "error"),
                      navigate("/details"))
                    ) : (
                      <button className="mr-8 lg:mr-0 coolBeans ml-10 font-bold font-DM tracking-[2.5px]">
                        PURCHASE
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <motion.div
            className="lg:col-span-4 mt-10 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <img
              className="w-auto rounded-xl h-fit bg-[#e0e0e0]"
              style={{
                boxShadow:
                  "15px 15px 23px rgba(188, 188, 188, 0.7), -15px -15px 23px rgba(255, 255, 255, 0.7)",
              }}
              src={image}
            />
            <div className="absolute left-[120px] -bottom-[18px]  lg:left-[257px] lg:-bottom-[20px]">
              <p className="font-DM text-3xl lg:text-5xl md:text-3xl text-orange-400 font-bold uppercase tracking-[10px] text-shadow-[4px 3px 5px rgba(0,0,0,0.47)]">
                {foodName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FoodPurchase;
