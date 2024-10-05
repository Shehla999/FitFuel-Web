import React from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFormCart,
} from "../redux/cart/cartSlice";

const Addcard = ({ isCartOpen, closeCart }) => {
  if (!isCartOpen) return null;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFormCart(id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>
          <button onClick={closeCart} className="bg-primary p-2 rounded-lg">
            <FiX className="text-2xl text-gray-600" />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{item.name}</p>
                    <p className="text-gray-500">
                      ${item.price * item.quantity}
                    </p>{" "}
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-primary text-black px-2 py-1 rounded-lg "
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-primary text-black px-2 py-1 rounded-lg "
                  >
                    -
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-primary text-black px-2 py-1 rounded-lg "
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No items in the cart yet.</p>
        )}
      </div>
    </div>
  );
};

export default Addcard;
