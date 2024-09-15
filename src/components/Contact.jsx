import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Photo10 from "../assets/images/photo-10.avif";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl  pt-5 px-8">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="text-center">
            <button className="text-xs font-semibold rounded-full px-6 py-2 bg-gray-200 mb-10">
              Share your thoughts
            </button>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              Love to hear from you
            </h2>
            <p className="text-gray-600 mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              veritatis voluptates neque itaque repudiandae sint, explicabo
              assumenda quam ratione placeat?
            </p>
          </div>

          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="p-4 md:p-16  items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-sm test-gray-500 mb-600">
                  Our friendly team would love to hear from you.
                </p>
                <form class="space-y-4 mt-12 ">
                  <div className="flex gap-4">
                    <div>
                      <lable className="text-sm font-medium leading-none text-gray-600 ">
                        {" "}
                        First Name
                      </lable>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium leading-none text-gray-600 ">
                        Last Name
                      </label>
                      <input
                        placeholder="Last Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      />
                    </div>
                  </div>

                  <label className="text-xs font-medium leading-none text-gray-600 ">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />

                  <label className="text-xs font-medium leading-none text-gray-600 ">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />

                  <label className="text-xs font-medium leading-none text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    placeholder="Leave us a message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-primary text-black p-2 rounded-md "
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="hidden sm:block lg:block p-4">
                <img
                  src={Photo10}
                  alt="Photo"
                  className="max-h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
