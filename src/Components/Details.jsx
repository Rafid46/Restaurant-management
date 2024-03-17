import { Link, useLoaderData } from "react-router-dom";
import NavBar from "./NavBar.jsx/NavBar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const food = useLoaderData();
  const { foodName, image, price, description, foodOrigin, foodCategory, _id } =
    food;

  const dynamicBgStyle = {
    backgroundImage: `url(${image})`,
  };
  console.log(food);
  return (
    <div className="bg-gray-950">
      <Helmet>
        <title>Delights || Details</title>
      </Helmet>
      <div className="">
        <NavBar></NavBar>
      </div>
      <div className="mb-32 relative">
        <div className="bg-cover" style={dynamicBgStyle}>
          <div className="bg-black bg-opacity-40 absolute inset-0"></div>
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 relative">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-orange-400 font-DM text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {foodName}
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-white font-DM">{description}</p>
              <div className="flex items-center justify-center">
                <p className="text-lg text-white font-DM static w-fit mt-6 font-semibold">
                  {price}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-lg text-white font-zz mr-6 font-bold">
                  Food Origin:{foodOrigin}
                </p>
                <p className="text-lg text-white font-zz font-bold">
                  Category: {foodCategory}
                </p>
              </div>
            </div>
            {/* <div className="text-center">
              <Link to={`/purchase/${_id}`}>
                <button className="buttom">ORDER</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Details;
