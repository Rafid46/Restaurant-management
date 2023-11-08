import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";
import white from "../../assets/white-banner.jpg";
const Blog = () => {
  return (
    <div>
      <div className="bg-gray-950">
        <NavBar></NavBar>
      </div>
      <div
        className="bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${white})` }}
      >
        <div>
          <h1 className="text-5xl font-bold text-green-500">
            What is one way data binding
          </h1>
          <p></p>
          <h1 className="text-5xl font-bold text-green-500">
            What is NPM in node.js
          </h1>
          <p></p>
          <h1 className="text-5xl font-bold text-green-500">
            Different between Mongodb database vs mySQL database
          </h1>
          <p></p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
