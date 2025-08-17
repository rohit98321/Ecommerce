import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  console.log(product);
  const { title, image, price, description,id} = product;

  return (
    <Link to={`singleproduct/${id}`} >
    <motion.div
      className="bg-[#1C352D] rounded-2xl shadow-md p-4 w-72 cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Product Image */}
      <div className="w-full h-44 bg-gray-200 rounded-xl mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-bold text-green-600">₹{price}</span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#239BA7] text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
          </Link>
  );
};

export default Card;
