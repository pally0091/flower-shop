/* eslint-disable no-unused-vars */
import React from "react";
import flower1 from "../assets/Flower Asset/pngwing 10.png";
import flower2 from "../assets/Flower Asset/pngwing 5.png";
import flower3 from "../assets/Flower Asset/pngwing 7.png";

const FlowerCollection = () => {
  return (
    <div className="text-center pt-10">
      <div className="w-[95%] md:w-1/2 lg:w-1/2 mx-auto">
        <h1 className="text-2xl font-semibold">Our Featured Flowers </h1>
        <p className="mt-1">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10 h-auto lg:h-96">
        <div className="bg-[#fabedb] p-4 md:p-10 lg:p-14 rounded-t-full h-auto lg:h-96 flower-div">
          <img
            className="h-full w-full"
            src={flower1}
            alt=""
          />
        </div>
        <div className="bg-[#b6f4f8] p-4  md:p-10 lg:p-14 rounded-t-full h-auto lg:h-96 flower-div">
          <img
            className="h-full w-full"
            src={flower2}
            alt=""
          />
        </div>
        <div className="bg-[#fffcdf] p-4  md:p-10 lg:p-14 rounded-t-full h-auto lg:h-96 flower-div">
          <img
            className="h-full w-full"
            src={flower3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerCollection;
