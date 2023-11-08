import Footer from "../Footer";
import NavBar from "../NavBar.jsx/NavBar";
import white from "../../assets/white-banner.jpg";
import { Helmet } from "react-helmet-async";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Delights || Blogs</title>
      </Helmet>
      <div className="bg-gray-950">
        <NavBar></NavBar>
      </div>
      <div
        className="bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${white})` }}
      >
        <div className="max-w-screen-[1200px] mx-auto gap-5+">
          <h1 className="text-5xl font-bold text-green-500">
            What is one way data binding
          </h1>
          <p className="text-2xl">
            One-way data binding is a concept commonly used in software
            development, particularly in the context of user interfaces and
            frameworks like Angular and React. It refers to the process of
            transferring data from a data source (such as a model or database)
            to a user interface component, without allowing changes in the UI to
            affect the data source. In other words, data flows in only one
            direction, from the source to the UI.
          </p>
          <h1 className="text-5xl font-bold text-green-500">
            What is NPM in node.js
          </h1>
          <p className="text-2xl">
            NPM stands for "Node Package Manager." It is the default package
            manager for Node.js, which is a JavaScript runtime that allows you
            to run JavaScript on the server-side. NPM is a crucial tool for
            managing and sharing packages (libraries and modules) of JavaScript
            code that can be used in Node.js projects.
          </p>
          <h1 className="text-5xl font-bold text-green-500">
            Different between Mongodb database vs mySQL database
          </h1>
          <p className="text-2xl">
            MongoDB and MySQL are both popular database management systems, but
            they have different data models, use cases, and characteristics.
            MongoDB: NoSQL, schema-less, document-oriented. Dynamic schema,
            flexible for unstructured data. JSON-like query language.
            Horizontally scalable. Good for flexible, rapidly changing data
            models. MySQL: SQL, relational, table-based. Rigid schema,
            structured data. SQL query language. Vertically and horizontally
            scalable. Well-suited for structured data and strong data
            consistency needs
          </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
