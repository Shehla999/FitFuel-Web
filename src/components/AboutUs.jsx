import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FiMapPin } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import Photo1 from "../assets/images/photo-1.jfif";
import Photo2 from "../assets/images/photo-2.jpg";
import Photo3 from "../assets/images/photo-3.jfif";
import Photo4 from "../assets/images/photo-4.jfif";
import Photo5 from "../assets/images/photo-5.webp";
import Photo6 from "../assets/images/photo-6.jpg";
import Photo7 from "../assets/images/photo-7.webp";
import Photo8 from "../assets/images/photo-8.jfif";
import Photo9 from "../assets/images/photo-9.avif";

const aboutus = [
  {
    title: "Gabrielle Fernandez",
    text: "Marketing Lead",
    image: Photo1,
  },
  {
    title: "Victória Silva",
    text: "Back-end developer",
    image: Photo2,
  },
  {
    title: "Gabrielle Fernandez",
    text: "Sales",
    image: Photo3,
  },
  {
    title: "Sadie Lewis",
    text: "Marketing Lead",
    image: Photo4,
  },
  {
    title: "Thilde Olaisen",
    text: "Marketing Lead",
    image: Photo5,
  },
  {
    title: "Deepika Ramesh",
    text: "Front-end developer",
    image: Photo6,
  },
  {
    title: "Jordi Santiago",
    text: "Front-end developer",
    image: Photo7,
  },
  {
    title: "Kerim Fahri",
    text: "Back-end developer",
    image: Photo8,
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-10 px-4 ">
        <div className=" mb-10">
          <button className="text-xs font-semibold bg-gray-200 py-2 px-4 rounded-full">
            {" "}
            About the company
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mt-8">
            Made with love, right here in Pakistan
          </h1>
          <p className="text-gray-500 text-md mt-6 max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>

        <div className="mb-8">
          <iframe
            className="w-full h-8 md:h-96 rounded-md "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8481449451834!2d90.37732871538556!3d23.756906594558745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b856eff7e2db%3A0xf0156218c21f1d85!2sDhaka!5e0!3m2!1sen!2sbd!4v1649288973735!5m2!1sen!2sbd"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
          <div>
            <FiMapPin className="text-3xl mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-bold">Islamabad office</h3>
            <p className="text-2 text-gray-600">Mon-Sat 9am to 5pm.</p>
            <p className="mt-2 text-gray-600">
              {" "}
              100, Electronic City Phase-1, <br />
              Bengaluru, Karnataka 560100 IN
            </p>
          </div>

          <div>
            <FiMapPin className="text-3xl mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-bold">Lahore office</h3>
            <p className="text-2 text-gray-600">Mon-Sat 9am to 5pm.</p>
            <p className="mt-2 text-gray-600">
              {" "}
              12th Main Rd, Indiranagar, <br />
              Bengaluru, Karnataka 560008 IN
            </p>
          </div>

          <div>
            <FiMapPin className="text-3xl mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-bold">Peshaware office</h3>
            <p className="text-2 text-gray-600">Mon-Sat 9am to 5pm.</p>
            <p className="mt-2 text-gray-600">
              {" "}
              42, Residency Rd, Shanthala Nagar, <br />
              Bengaluru, Karnataka 560025 IN
            </p>
          </div>
        </div>
        <div className="w-100 h-[1px] bg-gray-300 mt-16"></div>

        {/* Team section */}
        <div className="max-w-6xl mx-auto py-10 px-4 ">
          <div className=" mb-10">
            <button className="text-xs font-semibold bg-gray-200 py-2 px-4 rounded-full">
              <span className="flex justify-center items-center gap-4">
                Join Us
                <GoArrowRight />
              </span>
            </button>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mt-8">
              Meet our team
            </h1>
            <p className="text-gray-500 text-md mt-6 max-w-2xl ">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {aboutus.map((aboutus, index) => (
              <div key={index} className=" shadow-md  rounded-md ">
                <img
                  src={aboutus.image}
                  alt="photo1"
                  className="rounded-md border-rose-950"
                />
                <div className="pl-4">
                  <h3 className="mt-8 font-bold text-lg">{aboutus.title}</h3>
                  <p className="mb-8 text-sm text-gray-600">{aboutus.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-100 h-[1px] bg-gray-300 mt-16"></div>

        {/* join section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="mt-12 py-10">
            <button className="text-xs font-semibold px-6 py-2 rounded-full bg-gray-200 mb-10">
              <span className="flex justify-center items-center gap-8">
                Join our team
                <GoArrowRight />
              </span>
            </button>
            <h2 className="text-xl md:text-4xl font-bold mb-8 ">
              We're just getting started
            </h2>
            <p className="text-gray-600">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button className="bg-primary text-black md:px-32 sm:px-16 lg:px-56 py-2 rounded-lg mt-10">
              Join Now
            </button>
          </div>

          <div className="lg:mt-10 sm:mt-32">
            <img src={Photo9} alt="photo9" className="rounded-lg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
