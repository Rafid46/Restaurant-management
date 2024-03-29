import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/png3.png";
import Banner from "./Banner";
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
import { IoIosArrowDropup, IoMdArrowDropupCircle } from "react-icons/io";
import Extrasection from "../../Components/Extrasection";
import { useEffect, useState } from "react";
// import BannerPng from "../../assets/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai (1).png";
// import Banner from "./Homepage/Banner";
const Home = () => {
  const [topButton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    const scrollStep = window.scrollY / 40;
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      window.scrollBy(0, -scrollStep);
    }, 15);
  };

  return (
    <div>
      <Helmet>
        <title>Delights || Home</title>
      </Helmet>
      {/* <ScrollToTop
        className="pl-[9px] text-3xl text-red-600 shadow-none bg-none rounded-none"
        style={{ backgroundColor: "transparent" }}
        smooth
        width="20px"
        height="20px"
        component={<IoIosArrowDropup />}
      /> */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div
          style={{ backgroundImage: `url(${bannerImage})` }}
          className="bg-cover bg-center h-[1000px] max-w-10xl mx-auto"
        >
          <NavBar></NavBar>
          <div className="mt-[100px]" data-aos="zoom-out" data-aos-delay="100">
            <Banner></Banner>
          </div>
        </div>
        <section
          className="mt-[200px] mb-10"
          // style={{ backgroundImage: `url(${sectionImage})` }}
        >
          <div className="mt-10">
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                data-aos="zoom-out"
                data-aos-delay="400"
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
        <Extrasection></Extrasection>
        {/* footer */}
        <Footer></Footer>
      </div>
      {topButton && (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-orange-600"
          onClick={scrollUp}
        >
          <IoMdArrowDropupCircle />
        </button>
      )}
    </div>
  );
};

export default Home;
