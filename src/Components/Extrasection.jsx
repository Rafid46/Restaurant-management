import { Link } from "react-router-dom";
import tacos from "../../src/assets/mexican-tacos-with-beef-tomato-sauce-salsa.jpg";
import image from "../assets/handrawn-barbecue-elements.jpg";
import image2 from "../assets/pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
const Extrasection = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div
              className="grid place-content-center rounded   p-6 sm:p-8 bg-cover bg-center bg-blend-darken"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-6xl font-bold text-orange-500">
                    Are you hungry?
                  </h2>

                  <p className="mt-4 text-blue-500 text-4xl font-semibold">
                    Explore the featured
                  </p>
                </header>

                <Link
                  to="/allFood"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring hover:text-orange-400"
                >
                  View All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src={tacos}
                      alt=""
                      className="transition-transform transform scale-100 group-hover:scale-110  aspect-square w-full rounded object-cover object-center"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4">
                        Tacos
                      </h3>

                      <p className="mt-1 text-sm text-gray-100">$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <img
                      src={image2}
                      alt=""
                      className="transition-transform transform scale-100 group-hover:scale-110 aspect-square w-full rounded object-cover object-center"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4">
                        Pizza
                      </h3>

                      <p className="mt-1 text-sm text-gray-100">$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extrasection;
