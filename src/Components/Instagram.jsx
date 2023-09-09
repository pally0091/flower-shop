/* eslint-disable no-unused-vars */
import React from "react";
import f1 from "../assets/Flower Asset/Flower 01.png";
import f2 from "../assets/Flower Asset/Rectangle 4.png";
import f3 from "../assets/Flower Asset/Rectangle 5.png";
import f4 from "../assets/Flower Asset/Rectangle 6.png";

const Instagram = () => {
  return (
    <div className="w-[95%] mx-auto p-10">
      <h2 className="text-xl font-bold text-center">Instagram</h2>
      <p className="text-center mt-4">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 my-5">
        <div className="i-div shadow-md shadow-green-800 ">
          <img
            src={f1}
            alt=""
          />
        </div>
        <div className="i-div shadow-md shadow-green-800 ">
          <img
            src={f2}
            alt=""
          />
        </div>
        <div className="i-div shadow-md shadow-green-800 ">
          <img
            src={f3}
            alt=""
          />
        </div>
        <div className="i-div shadow-md shadow-green-800 ">
          <img
            src={f4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
