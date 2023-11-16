/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";
import { useContext, useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import burger from "../../assets/burg.png";
import { AuthContext } from "../Provider.jsx/AuthProvider";
const AllFood = () => {
  const { loading } = useContext(AuthContext);
  // const foods = useLoaderData();
  // console.log(foods);
  const [foods, setFoods] = useState([]);
  console.log(foods);
  const { count } = useLoaderData();
  console.log(count);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(9);

  // const [input, setInput] = useState("");

  const numberOfPages = Math.ceil(count / itemsPerPage);
  console.log(numberOfPages);
  const pages = [...Array(numberOfPages).keys()];
  // const pages = [];
  // for (let i = 0; i < numberOfPages; i++) {
  //   pages.push(i);
  // }
  // const { foodName, image, foodCategory, price, quantity } = foods;
  const { _id } = foods;
  console.log(_id);
  const [search, setSearch] = useState(" ");
  useEffect(() => {
    fetch(
      `http://localhost:5008/api/foods?page=${currentPage}&size=${itemsPerPage}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
    // if (loading) {
    //   return (
    //     <div
    //       className="loader rounded-full w-screen h-screen animate-spin
    // aspect-square flex justify-center items-center text-yellow-700"
    //     >
    //       <img src={burger} className="w-[80px] h-[80px]" alt="" />
    //     </div>
    //   );
    // }
  }, [currentPage, itemsPerPage, search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // if (input) {
    //   setSearch(input);
    // }
    setSearch(searchText);
    console.log("searched");
  };
  return (
    <div>
      <Helmet>
        <title>Delights || All food</title>
      </Helmet>
      <div className="bg-gray-950">
        <div>
          <NavBar></NavBar>
        </div>
        {/* search */}
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                // value={input}
                name="search"
                className="input text-white"
                placeholder="search..."
              />
              <span className="icon text-white">
                <button type="submit">
                  <FaSearchengin></FaSearchengin>
                </button>
              </span>
            </div>
          </form>
        </div>
        {/* ?.filter((food) => food.foodName.toLowerCase().includes(search)) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {foods?.map((food) => (
            <div
              key={food._id}
              className="max-w-screen-[1200px] mx-auto mb-20 mt-10"
            >
              <article className="article-wrapper">
                <div className="rounded-lg">
                  <img
                    className="rounded-lg w-[500px] h-[240px]"
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
                    <span className="project-type font-DM">
                      {food.quantity}
                    </span>
                    <p className="project-type font-DM">{food.foodCategory}</p>
                  </div>
                  <Link to={`/details/${food._id}`}>
                    <button className="rounded-md font-DM w-full coolBeans font-semibold text-lg text-red-500 tracking-[2px]">
                      DETAILS
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
    </div>
  );
};

export default AllFood;
