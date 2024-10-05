import React, { useState } from "react";
import img from "../assets/images/signin.avif";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(SignIn());
      navigate("/");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center w-1/2 bg-gray-50 p-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Sign in</h2>
          <p className="mb-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
              Create a free account
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onClick={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className=" w-full bg-primary text-black py-2 rounded-md "
            >
              Get started
            </button>

            <div className="my-4 flex items-center justify-center">
              <span className="w-1/3 border-b border-gray-300"></span>
              <span className="mx-2 text-gray-400">or</span>
              <span className="w-1/3 border-b border-gray-300"></span>
            </div>

            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex justify-center items-center mb-2 hover:bg-gray-50"
            >
              <span className="mr-2">
                <FaGoogle className="text-red-600" />
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex justify-center items-center hover:bg-gray-50"
            >
              <span className="mr-2">
                <FaFacebookF className="text-blue-600" />
              </span>
              Sign in with Facebook
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="w-1/2">
        <img
          src={img}
          alt="Team working on laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
