import NavBar from "../NavBar.jsx/NavBar";
import bannerImage from "../../assets/png3.png";
import Banner from "./Banner";
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
        <div className="mt-[100px]">
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default Home;
