import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/png3.png";
import Banner from "./Banner";
import { motion } from "framer-motion";
import slide1 from "../../assets/crispy-fried-chicken-plate-with-salad-carrot.jpg";
import slide2 from "../../assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg";
import slide3 from "../../assets/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce.jpg";
import slide4 from "../../assets/mexican-tacos-with-beef-tomato-sauce-salsa.jpg";
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
      <section className="mt-20 mb-20">
        <div className="container max-w-screen-[1200px] mx-auto">
          <img className="rounded-lg" src={slide1} />
          <img className="rounded-lg" src={slide2} />
          <img className="rounded-lg" src={slide3} />
          <img className="rounded-lg" src={slide4} />
        </div>
      </section>
      {/* extra section 2 */}
    </div>
  );
};

export default Home;
