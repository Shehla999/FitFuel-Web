import React from "react";
import { FaSearch } from "react-icons/fa";
import Plant from "../assets/images/green.png";

const Hero = () => {
  return (
    <section class="bg-primary p-8 rounded-lg m-10">
      <div class=" grid grid-rows md:grid-cols-2 mx-auto md:mx-16 justify-between gap-8 bg-primary items-center">
        <div className="space-y-16 ">
          <h1 class=" text-3xl md:text-6xl font-bold mb-16">
            Buy your dream plants
          </h1>
          <div class=" flex text-4xl font-semibold ">
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

          <form action="" class="mt-16 flex items-start space-x-2">
            <div className="flex sm:max-w-lg [563-761]:mx-0 md:w-full mx-auto rounded-md border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600  ">
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
        <div class="flex justify-center items-center ">
          <img src={Plant} alt="plant" class="-mb-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
