import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/png3.png";
import Banner from "./Banner";
import { motion } from "framer-motion";
import slide1 from "../../assets/crispy-fried-chicken-plate-with-salad-carrot.jpg";
import slide2 from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg";
import slide3 from "../../assets/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce.jpg";
import slide4 from "../../assets/mexican-tacos-with-beef-tomato-sauce-salsa.jpg";
import sectionImage1 from "../../assets/Untitled-1.png";
import sectionImage2 from "../../assets/2nd.png";
import logo from "../../assets/logo2.png";
import footerBg from "../../assets/copy-space-italian-food-ingredients.jpg";
// import BannerPng from "../../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai (1).png";
// import Banner from "./Homepage/Banner";
const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className="bg-cover bg-center h-[1000px] max-w-10xl mx-auto"
      >
        <NavBar></NavBar>
        <motion.div
          className="mt-[100px]"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <Banner></Banner>
        </motion.div>
      </div>
      <section
        className="mt-[200px] mb-20"
        // style={{ backgroundImage: `url(${sectionImage})` }}
      >
        <section>
          <div className="flex items-center justify-center">
            <img
              className=" w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] md:w-[400px] md:h-[400px] z-10"
              src={sectionImage1}
              alt=""
            />
          </div>
        </section>
        <div className="container max-w-screen-[1200px] mx-auto">
          <img className="rounded-lg" src={slide1} />
          <img className="rounded-lg" src={slide2} />
          <img className="rounded-lg" src={slide3} />
          <img className="rounded-lg" src={slide4} />
        </div>
      </section>
      {/* 2nd section */}
      <section>
        <div>
          <img src={sectionImage2} alt="" />
        </div>
      </section>
      {/* footer */}
      <footer
        className="footer footer-center p-10 bg-primary text-primary-content bg-cover bg-center h-[400px]"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <aside>
          <img src={logo} className="w-[100px] h-[100px]" alt="" />
          <p className="font-bold text-orange-500 text-2xl">
            Epicurean Delights
          </p>
          <p className="text-gray-900">Copyright © 2023 - All right reserved</p>
          <p className="text-gray-900">Contact us</p>
          <p className="text-gray-900">Email: epicureanDelights@gmail.com</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-400"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-600"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-700"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
