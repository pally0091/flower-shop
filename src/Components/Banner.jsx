/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../assets/Shop Banner.png";

const Banner = () => {
  return (
    <div>
      <nav className="py-5 px-10 bg-emerald-200 sticky top-0">
        <h1
          id="title"
          className="text-5xl italic text-center md:text-left lg:text-right font-semibold"
        >
          Botanical Bliss
        </h1>
      </nav>
      <div>
        <img
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
