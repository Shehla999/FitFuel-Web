import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Carts from "./Carts";
import About from "./About";
import Categories from "./Categories";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Carts />

      <About />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
