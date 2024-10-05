import React from "react";
import Plant1 from "../assets/images/Frame 40.png";
import Plant2 from "../assets/images/Frame 37.png";
import Plant3 from "../assets/images/Frame 39.png";
import { BsArrowRight } from "react-icons/bs";
const Categories = () => {
  return (
    <div className="py-8">
      <h1 className="text-xl font-extrabold text-center  md:text-2xl lg:text-4xl  ">
        Categories
      </h1>
      <p className="text-gray-500 text-center py-5">
        Find what you are Looking for
      </p>
      <div className="bg-primary mt-20">
        <div className="max-w-6xl mx-auto pb-2 grid grid-cols- gap-8 md:grid-cols-3">
          <div className="-mt-12">
            <img src={Plant1} alt="plant1" />
            <h1 className="py-3 text-lg font-semibold text-center">
              Natural Plants
            </h1>
          </div>

          <div className="mt-14 flex  flex-col justify-center items-center">
            <img src={Plant2} />
            <h1 className="text-lg font-semibold text-center pt-3">
              {" "}
              Natural Plants
            </h1>
            <p> Easiest way to healthy life by buying your favorite plants</p>
            <button className="bg-white flex justify-center items-center font-medium py-3 px-4 rounded-md text-md mb-9">
              Explore <BsArrowRight className="mx-2" />
            </button>
          </div>

          <div className="-mt-12">
            <img src={Plant3} />
            <h1 className="py-3 text-lg font-semibold text-center ">
              Natural Plants
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
