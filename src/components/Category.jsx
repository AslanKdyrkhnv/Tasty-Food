import React from "react";
import { Link } from "react-router-dom";
import client from "../client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source).url();
};

const Category = ({ category }) => {
  return (
    <div
      className="bg-gray-100 rounded-xl p-10 w-full lg:w-1/3"
      style={{
        background: category.hexCode ? `#${category.hexCode}` : "#f5f5f5",
      }}
    >
      <div>
        <img
          src={
            category.image?.asset
              ? urlFor(category.image.asset)
              : "fallback-image.png"
          }
          alt={category.title || "No Image"}
          className="w-40"
        />
      </div>
      <h4 className="text-2xl py-3 font-bold capitalize">
        {category.title || "No Title"}
      </h4>
      <p>{category.description || "No description available."}</p>
      <Link
        to={category.slug?.current ? `/filteredfoods/${category.title}` : "#"}
      >
        <button
          className="rounded mt-3 px-5 py-2 text-white w-full"
          style={{ background: "#FE043C" }}
        >
          View
        </button>
      </Link>
    </div>
  );
};

export default Category;
