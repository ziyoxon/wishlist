import React from "react";
import bg from "../../assets/bg-image.svg";
import card from "../../assets/card-bg.svg";

const Hero = ({ data }) => {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-gradient-to-b w-full flex items-center justify-center py-10">
          <div
            className="shadow-lg rounded-lg p-8 max-w-lg text-center relative"
            style={{ backgroundImage: `url(${card})` }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mt-6">
              🌱 <br /> The nature candle
            </h1>
            <p className="text-gray-600 mt-4">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
            <button className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
              Discovery our collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
