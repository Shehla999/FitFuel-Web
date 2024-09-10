import React from "react";
import { FaSearch } from "react-icons/fa";
import Plant from "../assets/images/green.png";

const Hero = () => {
  return (
    <section class="bg-primary p-8 rounded-lg m-10">
      <div class="flex flex-col md:flex-row justify-between gap-8  items-centen">
        <div class="space-y-16">
          <h1 class="text-6xl font-bold mb-16">Buy your dream plants</h1>
          <div class=" flex text-4xl font-semibold ">
            <p class="text-3xl font-semibold border-r-2 pr-6 border-gray-600">
              50+
              <br />
              <span class="font-normal">Plant species </span>
            </p>

            {/* <div class="w-0.5 h-18 bg-black"></div> */}

            <p class="text-3xl pl-6 font-semibold">
              100+
              <br />
              <span class="font-normal">Customers </span>
            </p>
          </div>

          <div class="relative w-full md:w-auto px-56 py-5  rounded-lg bg-white items-center ">
            <input
              type="text"
              placeholder="what are you looking for?"
              class="border-none focus:outline-none placeholder:text-gray-600  bg-transparent"
            />
            <div class="absolute bg-primary  right-3 top-2.5 px-3 py-3 rounded-lg ">
              <FaSearch class="text-xl" />
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img src={Plant} alt="plant" class="-mb-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
