/* eslint-disable no-unused-vars */
import React from "react";
import delivary from "../assets/Flower Asset/Group 57.png";
import flower from "../assets/Flower Asset/Group 58.png";
import phone from "../assets/Flower Asset/Group 59.png";

const Conclusion = () => {
  return (
    <div className="py-5 px-2 lg:py-16 lg:px-20 grid grid-cols-3 gap-2 my-5 bg-gray-200">
      <card>
        <div className="w-16 h-16 mx-auto">
          <img
            className="w-full h-full"
            src={delivary}
            alt=""
          />
        </div>
        <p className="text-center mt-2">Same Day Delivery. Click & Collect.</p>
      </card>
      <card>
        <div className="w-16 h-16 mx-auto">
          <img
            className="w-full h-full"
            src={flower}
            alt=""
          />
        </div>
        <p className="text-center mt-2">Fresh Flowers. Local Growers.</p>
      </card>
      <card>
        <div className="w-16 h-16 mx-auto">
          <img
            className="w-full h-full"
            src={phone}
            alt=""
          />
        </div>
        <p className="text-center mt-2">24/7 Free Support.</p>
      </card>
    </div>
  );
};

export default Conclusion;
