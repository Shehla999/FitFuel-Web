import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return isSignedIn ? Component : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
