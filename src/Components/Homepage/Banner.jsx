import { Link } from "react-router-dom";
// const nextVariants = {
//   hidden: {
//     x: "-100vw",
//   },
//   visible: {
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//     },
//   },
// };
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center">
      <div>
        <p className="font-TW text-6xl lg:text-9xl font-normal text-yellow-50 text-center mb-16 menu tracking-[5px]">
          <span className="mt-10 lg:mt-0">
            Epicurean <span className="mt-10 lg:mt-0">Delights</span>
          </span>
        </p>
        <h1 className="text-center font-thin font-ZZ text-5xl text-white mb-10">
          Effortless Restaurant Management: Simplifying Success,
          <br /> One Bite at a Time!
        </h1>
        <div className="text-center">
          <Link to="allFood">
            <button
              data-aos="zoom-out"
              data-aos-delay="400"
              className="hover:scale-2 btn text-xl font-ZZ rounded-none w-[200px] px-5 pb-9 pt-4 bg-transparent text-white hover:text-orange-500"
            >
              M E N U S
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
