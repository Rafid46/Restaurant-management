import { useLoaderData } from "react-router-dom";

const MyAddedFood = () => {
  const loader = useLoaderData();
  console.log(loader);
  return <div></div>;
};

export default MyAddedFood;
