import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  // Link,
  // Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Addcard from "./Addcard";
import User from "./User";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  // className=" fixed w-full z-10 top-0 left-0 bg-transparent transition-all duration-300  ease-in-out pt-5 ">
  return (
    <header
      className={`${
        isScroll ? " shadow-lg bg-primary top-0 " : "bg-white "
      }   fixed w-full z-10 top-0 left-0   pt-5 animate__animated animate__slideInDown `}
    >
      <nav className="container mx-auto pt-0 flex justify-between items-center pb-5">
        <div className="flex space-x-16">
          <div className="text-xl font-semibold text-black">GREENMIND</div>

          <ul className=" hidden md:flex space-x-6">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/aboutus">About Us</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-8 hidden md:block">
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="text-xl font-semibold"
          >
            <IoCartOutline />
          </button>

          {/* user */}
          <button
            onClick={() => setIsUserOpen(!isUserOpen)}
            className="text-xl"
          >
            <IoPersonOutline />
          </button>
          <button
            className={`${
              isScroll ? "bg-white" : "bg-primary"
            }  px-4 py-2 rounded-lg text-black font-semibold`}
          >
            <a href="/contact">Contact</a>
          </button>
        </div>

        {/* User section  */}
        <User isUserOpen={isUserOpen} closeUser={() => setIsUserOpen(false)} />

        {/* cart section */}

        <Addcard
          isCartOpen={isCartOpen}
          closeCart={() => setIsCartOpen(false)}
        />
        {/* menu items */}
        <div className="md:hidden z-50">
          <button onClick={() => setShow(!show)}>
            <BiMenuAltRight className="text-xl" />
          </button>
        </div>
        {show && (
          <div className="absolute top-0 left-0  w-full h-120 bg-white z-50 p-12 shadow-lg rounded-[12px] m-2  ">
            <div className="flex justify-between items-center ">
              <div className="text-2xl font-bold">GREENMIND</div>
              <div className="bg-primary px-2 py-2 rounded-lg">
                <FiX
                  onClick={() => setShow(false)}
                  className="cursor-pointer text-2xl font-semibold"
                />
              </div>
            </div>
            <ul className="mt-8 flex flex-col space-y-4 ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/aboutus">About Us</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="mt-8 py-2 w-full bg-primary text-black font-semibold rounded-lg">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
