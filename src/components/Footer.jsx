import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-primary py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-7 mb-3">Company</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-900 cursor-pointer">About us</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Company History
              </li>
              <li className="hover:text-gray-900 cursor-pointer">Our Team</li>
              <li className="hover:text-gray-900 cursor-pointer">Our Vision</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Press Release
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-7 mb-3">Our Stores</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-900 cursor-pointer">Washington</li>
              <li className="hover:text-gray-900 cursor-pointer">
                New Hampshire
              </li>
              <li className="hover:text-gray-900 cursor-pointer">Maine</li>
              <li className="hover:text-gray-900 cursor-pointer">Texas</li>
              <li className="hover:text-gray-900 cursor-pointer">Indiana</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-7 mb-3">Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-900 cursor-pointer">
                UI / UX Design
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                App Development
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                API reference
              </li>
              <li className="hover:text-gray-900 cursor-pointer">API status</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-7 mb-3">Legal</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-900 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                Cookie Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer">Disclaimer</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Media Policy
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-700 mb-3">Social Links</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-900 cursor-pointer">Facebook</li>
              <li className="hover:text-gray-900 cursor-pointer">Twitter</li>
              <li className="hover:text-gray-900 cursor-pointer">Instagram</li>
              <li className="hover:text-gray-900 cursor-pointer">Linkedin</li>
              <li className="hover:text-gray-900 cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white text-start mx-auto py-4 ">
        <p className="text-xs">
          copyright 2024 ShehlaMalik.com All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
