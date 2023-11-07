import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";

import black from "../../assets/vintage-old-rustic-cutlery-dark.jpg";
import swal from "sweetalert";
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
    fetch("http://localhost:5008/api/foods/addedFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foods),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("food added successfully", "enjoy your meal", "success");
        }
        form.reset();
      });
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
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="price"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="price"
                />
              </label>
              <label className="mb-5">
                <input
                  type="description"
                  id="hero-input"
                  name="description"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="description"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="foodOrigin"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="foodOrigin"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="quantity"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
                  placeholder="quantity"
                />
              </label>
              <label className="mb-5">
                <input
                  type="text"
                  id="hero-input"
                  name="category"
                  className="mb-5 py-3 bg-transparent px-4 block w-full xl:min-w-[18rem] border-gray-200 border-2 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-50 text-white"
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
