import React from "react";
import { FaSearch } from "react-icons/fa";
import Plant from "../assets/images/green.png";

const Hero = () => {
  return (
    <section class="bg-primary rounded-lg m-10 mt-24">
      <div class=" grid grid-rows md:grid-cols-2 mx-auto md:mx-2 justify-between  items-center ">
        <div className=" py-4 sm:px-8 md:pl-16 sm:justify-between sm:items-center">
          <h1 class=" text-3xl md:text-6xl font-bold mb-10">
            Buy your dream plants
          </h1>
          <div class=" flex text-4xl font-semibold pb-10">
            <p class="md:text-5xl text-2xl font-semibold border-r-2 pr-6 border-gray-600">
              50+
              <br />
              <span class="font-normal md:text-3xl text-xl">
                Plant species{" "}
              </span>
            </p>

            {/* <div class="w-0.5 h-18 bg-black"></div> */}

            <p class="md:text-5xl text-2xl pl-6 font-semibold">
              100+
              <br />
              <span className="font-normal md:text-3xl text-xl">
                Customers{" "}
              </span>
            </p>
          </div>

          <form action="" class="flex">
            <div className="flex sm:max-w-lg [563-761]:mx-0 md:w-full rounded-md border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600">
              <input
                className="border-none w-full text-lg focus:outline-none placeholder:text-gray-600 bg-transparent "
                placeholder="What are you look for?"
              />

              <span className="bg-primary rounded-md p-3">
                <FaSearch class="text-xl" />
              </span>
            </div>
          </form>
        </div>
        {/* <div class="flex justify-center items-center  bg-blue-800">
          <img src={Plant} alt="plant" class="-mb-8s " />
        </div> */}

        <div className="flex">
          <img src={Plant} alt="plant" className="w-full h-auto rounded" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
