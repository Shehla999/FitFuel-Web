import React from "react";
import Plant1 from "../assets/images/Frame 9.png";
import Plant2 from "../assets/images/Frame 7.png";
import Plant3 from "../assets/images/Frame 8.png";
const Carts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-2 justify-center items-center">
          <div className="bg-white rounded-md p-4 text-start ">
            <h2 className="text-4xl font-bold mb-4">Best Selling Plants</h2>
            <p className="text-lg mt-2 text-gray-500">
              Easiest way to a healthy life by buying your favorite plants
            </p>
            <button className="text-black bg-primary px-6 py-2 rounded-md mt-8">
              See more{" "}
            </button>
          </div>

          <div className="bg-white rounded-md p-4 text-start md:text-center">
            <img src={Plant1} alt="Plant1" className="mx-auto" />
            <h3 className="text-xl mt-4">Natural Plants</h3>
            <p className="text-lg mt-2 text-gray-500">Rs 1,400.00</p>
          </div>

          <div className="bg-white  rounded-md p-4 text-start">
            <img src={Plant2} alt="Plant1" className="mx-auto" />
            <h3 className="text-xl mt-4">Artificial Plants</h3>
            <p className="text-lg mt-2 text-gray-500">Rs 900.00</p>
          </div>

          <div className="bg-white rounded-md p-4 text-start">
            <img src={Plant3} alt="Plant1" className="mx-auto" />
            <h3 className="text-xl mt-4">Artificial Plants</h3>
            <p className="text-lg mt-2 text-gray-500">Rs 3,500.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
