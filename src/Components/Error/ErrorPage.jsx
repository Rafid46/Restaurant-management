import { Link } from "react-router-dom";
import error from "../../assets/6342461.png";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[800px] mx-auto h-screen">
      <img src={error} alt="" />
      <Link to="/">
        <button className="btn text-white mt-10">HOME</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
