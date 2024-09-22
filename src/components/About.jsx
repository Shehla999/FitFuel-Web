import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FiPhoneIncoming } from "react-icons/fi";
import { PiBatteryVerticalHighBold, PiPottedPlantBold } from "react-icons/pi";

const About = () => {
  return (
    <section className="py-4 bg-orange-500">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-[900] mb-6">About Us</h2>
        <p className="text-gray-60 mb-12 text-gray-500">
          Order now and appreciate the beauty of nature
        </p>
        <div className="grid gap-4 grid-rows-3 md:grid-cols-3 sm:grid-rows-3 justify-center items-center space-y-6  mx-16 bg-green-500">
          <div className="flex flex-col items-center bg-purple-700">
            <div className="bg-primary p-4 rounded-full">
              <PiPottedPlantBold size={48} />
            </div>
            <h3 className="mt-4 text-xl font-bold">Large Assortment</h3>
            <p class="mt-2 text-gray-500 text-center">
              We offer many different types of products with fewer variations in
              each category.
            </p>
          </div>

          <div className="flex flex-col items-center bg-purple-700">
            <div className="bg-primary p-4 rounded-full">
              <BsBoxSeam size={48} />
            </div>
            <h3 className="mt-4 text-xl font-bold">Large Assortment</h3>
            <p class="mt-2 text-gray-500 text-center">
              We offer many different types of products with fewer variations in
              each category.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-primary p-4 rounded-full">
              <FiPhoneIncoming size={48} />
            </div>
            <h3 className="mt-4 text-xl font-bold">Large Assortment</h3>
            <p class="mt-2 text-gray-500 text-center ">
              We offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
