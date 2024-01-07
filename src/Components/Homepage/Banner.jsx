import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
          Epicurean Delights
        </p>
        <h1 className="text-center font-thin font-ZZ text-5xl text-white mb-10">
          Effortless Restaurant Management: Simplifying Success,
          <br /> One Bite at a Time!
        </h1>
        <motion.div
          // variants={nextVariants}
          // initial="hidden"
          // animate="visible"
          whileHover={{ scale: 1.2 }}
          className="text-center"
        >
          <Link to="allFood">
            <button className="btn text-xl font-ZZ rounded-none w-[200px] px-5 pb-9 pt-4 bg-transparent text-white hover:text-orange-500">
              M E N U S
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
