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
import Footer from "../Footer";
import homeBanner from "../../assets/43731-O4130W.png";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";
// import BannerPng from "../../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai (1).png";
// import Banner from "./Homepage/Banner";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Delights || Home</title>
      </Helmet>
      <ScrollToTop
        className="pl-[9px] text-3xl text-red-600 shadow-none bg-none rounded-none"
        style={{ backgroundColor: "transparent" }}
        smooth
        width="20px"
        height="20px"
        component={<IoIosArrowDropup />}
      />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
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
              delay: 0.7,
            }}
          >
            <Banner></Banner>
          </motion.div>
        </div>
        <section
          className="mt-[200px] mb-10"
          // style={{ backgroundImage: `url(${sectionImage})` }}
        >
          <div className="mt-10">
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                className="mt-20 -bottom-[350px]  lg:-bottom-[480px] absolute w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] md:w-[400px] 
                md:h-[400px] z-10"
                src={sectionImage1}
              />
              <div className="container max-w-screen-[1200px] mx-auto relative mt-28 mb-10 lg:mb-0">
                <img className="rounded-lg" src={slide1} />
                <img className="rounded-lg" src={slide2} />
                <img className="rounded-lg" src={slide3} />
                <img className="rounded-lg" src={slide4} />
              </div>
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <section>
          <div className="">
            <img className="w-full mx-auto" src={sectionImage2} alt="" />
          </div>
        </section>
        {/* top6 section */}
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
