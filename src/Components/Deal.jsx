/* eslint-disable no-unused-vars */
import React from "react";
import deal from "../assets/Flower Asset/pngwing 8.png";

const Deal = () => {
  return (
    <div className="bg-rose-100 flex flex-col md:flex-row lg:flex-row w-[95%] mx-auto items-center p-5">
      <div className="w-full md:w-2/3 lg:w-2/3 mx-auto px-5 text-center">
        <h2 className="text-xl font-bold">
          Hot Deal ! Sale Up To <span className="text-red-400">25%</span> Off
        </h2>
        <p className="mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 mx-auto p-10 ">
        <img
          className=""
          src={deal}
          alt=""
        />
      </div>
    </div>
  );
};

export default Deal;
