import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFormCart } from "../redux/cart/cartSlice";
import Header from "./Header";
import Footer from "./Footer";

// import images
import img1 from "../assets/images/plants-1.jpg";
import img2 from "../assets/images/plants-2.jpg";
import img3 from "../assets/images/plants-3.jfif";
import img4 from "../assets/images/plants-4.jfif";
import img5 from "../assets/images/plants-5.jfif";
import img6 from "../assets/images/plants-6.jfif";
import img7 from "../assets/images/plants-7.jfif";
import img8 from "../assets/images/plants-8.jfif";

const Products = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 25,
      img: img1,
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 35,
      img: img2,
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 20,
      img: img3,
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 30,
      img: img4,
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 18,
      img: img5,
    },
    {
      id: 6,
      name: "Aloe Vera",
      price: 15,
      img: img6,
    },
    {
      id: 7,
      name: "Dracaena",
      price: 22,
      img: img7,
    },
    {
      id: 8,
      name: "Philodendron",
      price: 28,
      img: img8,
    },
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFormCart(id));
  };

  return (
    <>
      <Header />

      <div className="container mx-auto py-12 px-4 mt-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Beautiful Plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">${product.price}</p>

                {isInCart(product.id) ? (
                  <>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="w-full bg-red-500 text-white py-2 rounded-lg mb-2 hover:bg-red-600 transition-all"
                    >
                      Remove from Cart
                    </button>
                    <button
                      className="w-full bg-blue-500  py-2 rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Added to Cart
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-primary text-black py-2 rounded-lg transition-all"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
