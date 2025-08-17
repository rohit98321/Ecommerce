import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { asyncupdateproduct } from "../Redux/actions/ProdcutAction";
import { asyncdeleteproduct } from "../Redux/actions/ProdcutAction";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const data = useSelector((state) => state.product.products);
  const product = data.find((product) => product.id == id);
  console.log(product);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      description: product?.description,
      image: product?.image,
    },
  });

  const updateHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
    console.log(id, product);
    toast.success("Updated")
  };

  const deleteHandler =()=>{
    dispatch(asyncdeleteproduct(id))
    toast.success("deleted")
    navigate("/")
  }

  return (
    <div className="flex w-screen gap-10 mt-20 items-center justify-evenly">
      <motion.div
        className="bg-[#1C352D] rounded-2xl shadow-md p-4 w-[500px] h-[500px] cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Product Image */}
        <div className="w-full h-44 bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <img
            src={product?.image}
            alt={product?.image}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-1">{product?.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product?.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-green-600">
            ₹{product?.price}
          </span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#239BA7] text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>

      <form
        className="flex flex-col w-[500px] h-[500px] my-5  gap-10 "
        onSubmit={handleSubmit(updateHandler)}
      >
        <input
          {...register("title", { required: "without title can't register" })}
          type="text"
          className="border-b outline-0"
          placeholder="Title"
        />
        {errors.title && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.title.message}
          </p>
        )}

        <input
          {...register("price", { required: "price id must be enter" })}
          type="Number"
          className="border-b outline-0"
          placeholder="Price"
        />
        {errors.price && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.price.message}
          </p>
        )}

        <input
          {...register("image", { required: "image must be enter" })}
          type="url"
          className="border-b outline-0"
          placeholder="Image Url"
        />
        {errors.image && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.image.message}
          </p>
        )}

        <input
          {...register("description", {
            required: "description must be enter",
          })}
          type="text"
          className="border-b outline-0"
          placeholder="description"
        />

        <button
          className="bg-[#239BA7] w-[200px] h-[50px] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#093FB4]"
        >
          Update Product
        </button>

        <button
          className="bg-[#E43636] w-[200px] h-[50px] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#8A0000]"
               onClick={deleteHandler}
        >
          Delete Product
        </button>
      </form>
    </div>
  );
};

export default SingleProduct;
