import { useLoaderData } from "react-router-dom";

const OrderedFood = () => {
  const orderedFood = useLoaderData();
  console.log(orderedFood);
  return <div></div>;
};

export default OrderedFood;
