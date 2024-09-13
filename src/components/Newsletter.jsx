import React from "react";
import { FaStar } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-white text-start py-12">
      <div className="container mx-auto  px-4 lg:flex lg:items-center lg:justify-between text-start">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold md-4">
            Sign up for our weekly newsletter
          </h2>
          <p className="text-gray-600 mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
          <p className="font-semibold text-sm mb-4">
            Trusted by over 100,000+ businesses and individuals
          </p>

          <div className="flex justify-center items-center mb-4 ">
            <div className=" flex space-x-2 text-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <span className="text-gray-600 ml-3">4.8/5 . 3420 Reviews</span>
          </div>
        </div>

        <div className="lg:w-1/2 text-start">
          <form className="flex w-full max-w-md flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className=" flex  w-full lg:w-auto border broder-gray-300 rounded-md p-2 mb-4 lg:mb-0 lg:mr-4 focus:outline-none"
            />
            <button className="bg-primary text-black font-semibold py-2 px-12 rounded-md">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-2">
            By signing up, you agree to our terms of service and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
