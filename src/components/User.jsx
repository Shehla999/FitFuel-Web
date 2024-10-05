import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSignInModal, signOut } from "../redux/cart/userSlice";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const User = ({ isUserOpen, closeUser }) => {
  if (!isUserOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">User</h2>
          <FiX
            onClick={closeUser}
            className="cursor-pointer text-4xl bg-primary p-2 rounded"
          />
        </div>

        <button className="bg-primary w-full py-2 rounded-lg mt-4">
          <Link to="/signIn">View Profile</Link>
        </button>
        <button className="bg-primary w-full py-2 rounded-lg mt-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
