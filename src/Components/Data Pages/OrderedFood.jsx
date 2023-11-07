/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar.jsx/NavBar";
import Footer from "../Footer";

const OrderedFood = () => {
  const orderedFood = useLoaderData();
  // const { foodiName, image, price, date, email } = orderedFood;
  console.log(orderedFood);
  return (
    <div>
      <div className="bg-gray-950">
        <NavBar></NavBar>
      </div>
      <div>
        <p className="text-4xl font-bold text-center text-green-600">
          MY ORDERED FOODS
        </p>
        {orderedFood.map((food) => (
          // <div>
          //   <div classNameName="card  card-compact w-96 bg-base-100 shadow-xl">
          //     <figure>
          //       <img src={food.image} alt="Shoes" />
          //     </figure>
          //     <div classNameName="card-body">
          //       <h2 classNameName="card-title">{food.foodiName}</h2>
          //       <p>{food.price}</p>
          //       <p>{food.date}</p>
          //       <p>{food.email}</p>
          //     </div>
          //   </div>
          // </div>

          <div className="w-full max-w-md mx-auto p-4 bg-transparent rounded-lg shadow sm:p-8 ">
            <div className="grid grid-cols-1 gap-5">
              <ul role="list" className="">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
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
                      <p> $ {food.price}</p>
                    </div>
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
