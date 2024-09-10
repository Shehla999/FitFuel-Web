import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header class=" w-full mx-2">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <div class="flex space-x-16">
          <div class="text-xl font-semibold text-black">GREENMIND</div>

          <ul class=" hidden md:flex space-x-6">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/products">Products</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="flex items-center space-x-8 hidden md:block">
          <button class="text-xl font-semibold">
            <IoCartOutline />
          </button>
          <button class="text-xl">
            <IoPersonOutline />
          </button>
          <button class="bg-primary px-4 py-2 rounded-lg text-black font-semibold ">
            Contact
          </button>
        </div>

        <div class="md:hidden z-50">
          <button onClick={() => setShow(!show)}>
            <BiMenuAltRight class="text-xl" />
          </button>
        </div>
        {show && (
          <div class="absolute top-0 left-0  w-full h-120 bg-white z-50 p-12 shadow-lg rounded-[12px] m-2  ">
            <div class="flex justify-between items-center ">
              <div class="text-2xl font-bold">GREENMIND</div>
              <div class="bg-primary px-2 py-2 rounded-lg">
                <FiX
                  onClick={() => setShow(false)}
                  class="cursor-pointer text-2xl font-semibold"
                />
              </div>
            </div>
            <ul class="mt-8 flex flex-col space-y-4 ">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/products">Products</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <button class="mt-8 py-2 w-full bg-primary text-black font-semibold rounded-lg">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
