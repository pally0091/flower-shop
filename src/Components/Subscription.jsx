/* eslint-disable no-unused-vars */
import React from "react";

const Subscription = () => {
  return (
    <div
      id="subs"
      className="py-16 px-5 md:px-16 lg:py-20 lg:px-32"
    >
      <h2 className="text-xl font-bold text-center">Get The Latest Deals</h2>
      <p className="text-center mt-4">$30 coupon for first shopping</p>
      <div className="mt-4 w-full shadow-md shadow-gray-300 flex flex-col md:flex-row lg:flex-row justify-center">
        <input
          className="w-full md:w-5/6 lg:w-5/6 p-2"
          type="text"
        />
        <button className="bg-[#E55473] w-full md:w-1/6 lg:w-1/6 p-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
