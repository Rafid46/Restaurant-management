/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const OrderedFood = () => {
  const orderedFood = useLoaderData();
  // const { foodiName, image, price, date, email } = orderedFood;
  console.log(orderedFood);
  return (
    <div>
      {orderedFood.map((food) => (
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={food.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.foodiName}</h2>
              <p>{food.price}</p>
              <p>{food.date}</p>
              <p>{food.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderedFood;
