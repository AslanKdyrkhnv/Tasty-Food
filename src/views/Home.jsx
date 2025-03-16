import React from "react";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto">
        <div className="flex lg:flex-row flex-col my-10 justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold">Hello my world</h2>
            <p className="text-xl lg:text-2xl">What do you want?</p>
          </div>
          <div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
            <input
              type="text"
              className="w-full lg:w-80 p-2 border-2 border-gray-500 rounded focus:outline-none font-medium"
            />
            <button
              style={{ background: "#FE043C" }}
              className="rounded w-full lg:w-auto px-10 py-3 text-white"
            >
              Serach
            </button>
          </div>
        </div>
        <hr className="my-10" />
        <Categories />
      </section>
    </div>
  );
};

export default Home;
