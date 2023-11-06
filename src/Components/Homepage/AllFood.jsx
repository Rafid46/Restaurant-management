/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";
import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
const AllFood = () => {
  // const foods = useLoaderData();
  // console.log(foods);
  const [foods, setFoods] = useState(useLoaderData());
  console.log(foods);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(9);
  const [input, setInput] = useState("");
  // const [search, setSearch] = useState(" ");

  const itemPerPage = 6;

  const numberOfPages = Math.ceil(foods.length / itemPerPage);
  console.log(numberOfPages);
  // const pages = [...Array(numberOfPages).keys()];
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  // const { foodName, image, foodCategory, price, quantity } = foods;
  const { _id } = foods;
  console.log(_id);
  useEffect(() => {
    fetch(
      `http://localhost:5008/api/foods?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPerPage]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setSearch(input);
    }
    console.log("searched");
  };
  return (
    <div className="bg-gray-950">
      <div>
        <NavBar></NavBar>
      </div>
      {/* search */}
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              name="text"
              className="input"
              placeholder="search..."
            />
            <span className="icon text-white">
              <button>
                <FaSearchengin></FaSearchengin>
              </button>
            </span>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {foods.map((food) => (
          <div
            key={food._id}
            className="max-w-screen-[1200px] mx-auto mb-20 mt-10"
          >
            <article className="article-wrapper">
              <div className="rounded-lg">
                <img
                  className="rounded-lg w-[300px] h-[200px]"
                  src={food.image}
                  alt=""
                />
              </div>
              <div className="project-info">
                <div className="flex-pr">
                  <div className="project-title text-nowrap font-DM  text-orange-600">
                    {food.foodName}
                  </div>
                </div>
                <div className="types">
                  <span className="project-type font-DM">{food.price}</span>
                  <span className="project-type font-DM">{food.quantity}</span>
                  <p className="project-type font-DM">{food.foodCategory}</p>
                </div>
                <Link to={`/details/${food._id}`}>
                  <button className="btn font-DM w-full coolBeans font-semibold text-sm text-red-500">
                    Details
                  </button>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
      {/* pagination map */}
      <div className="text-white flex  justify-center items-center">
        {/* <p>Current Page:{currentPage}</p> */}
        {pages.map((page) => (
          <div className="join text-white  mb-10 m-5">
            <button
              className={currentPage === page && "selected join-item btn "}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllFood;
