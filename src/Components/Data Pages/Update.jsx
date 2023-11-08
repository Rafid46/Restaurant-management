import { useContext } from "react";
import NavBar from "../NavBar.jsx/NavBar";
import { AuthContext } from "../Provider.jsx/AuthProvider";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../Footer";
import update from "../../assets/update.jpg";
// import burger from "../../assets/burg.png";
const Update = () => {
  const { user } = useContext(AuthContext);
  const loader = useLoaderData();
  console.log(loader);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const image = form.image.value;
    const category = form.category.value;
    const foodOrigin = form.foodOrigin.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    const foods = {
      image,
      description,
      category,
      foodOrigin,
      price,
      quantity,
      foodName,
    };
    const { _id } = loader;
    console.log(foods);
    fetch(`http://localhost:5008/api/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("food updated", "", "success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   const {
  //     image,
  //     description,
  //     category,
  //     foodOrigin,
  //     price,
  //     _id,
  //     quantity,
  //     foodName,
  //   } = loader;

  return (
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${update})` }}
    >
      <div className="bg-gray-950">
        <NavBar></NavBar>
      </div>
      <section className="mb-10">
        <h1 className="text-5xl text-center my-10 text-white font-lato font-bold">
          UPDATE PRODUCTS
        </h1>
        <div
          className="flex items-center justify-center flex-col"
          //   className="bg-cover bg-center"
        >
          <form onSubmit={handleUpdateProduct}>
            <div className="w-full sm:w-auto">
              <label className="mb-5">
                <input
                  defaultValue={loader.foodName}
                  type="text"
                  id="hero-input"
                  name="foodName"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="food name"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="image"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="image"
                  defaultValue={loader.image}
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="price"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="price"
                  defaultValue={loader.price}
                />
              </label>
              <label className="mb-5">
                <input
                  type="description"
                  id="hero-input"
                  name="description"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="description"
                  defaultValue={loader.description}
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="foodOrigin"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="foodOrigin"
                  defaultValue={loader.foodOrigin}
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="quantity"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="quantity"
                  defaultValue={loader.quantity}
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="category"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="category"
                  defaultValue={loader.category}
                />
              </label>
            </div>
            <div>
              <button className="ml-[40px] lg:ml-[70px] coolBeans  font-bold font-lato tracking-[2.5px]">
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Update;
