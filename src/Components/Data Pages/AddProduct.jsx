import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";

import black from "../../assets/vintage-old-rustic-cutlery-dark.jpg";
const AddProduct = () => {
  const handleAddProduct = (e) => {
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
    console.log(foods);
  };
  return (
    <div className="bg-no-repeat" style={{ backgroundImage: `url(${black})` }}>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-lato font-thin text-white tracking-[7px]">
          ADD FOOD
        </h1>
        <div className="mt-5 mb-10">
          {/* form */}
          <form onSubmit={handleAddProduct}>
            <div className="w-full sm:w-auto">
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="foodName"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="food name"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="image"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="image"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="price"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="price"
                />
              </label>
              <label className="mb-5">
                <input
                  type="description"
                  id="hero-input"
                  name="description"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="description"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="foodOrigin"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="foodOrigin"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="quantity"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="quantity"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="category"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50"
                  placeholder="category"
                />
              </label>
            </div>
            <div>
              <button className="mr-8 lg:mr-0 coolBeans ml-10 font-bold font-lato tracking-[2.5px]">
                ADD FOOD
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddProduct;
