import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center">
      <div>
        <p className="font-TW text-4xl lg:text-9xl font-normal text-yellow-50 text-center mb-16 menu">
          Epicurean Delights
        </p>
        <h1 className="text-center font-thin font-ZZ text-5xl text-white mb-10">
          Effortless Restaurant Management: Simplifying Success,
          <br /> One Bite at a Time!
        </h1>
        <div className="text-center">
          <Link to="allFood">
            <button className="btn text-xl font-ZZ rounded-none w-[200px] px-5 pb-9 pt-4 bg-transparent text-white hover:text-orange-500">
              M E N U S
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
