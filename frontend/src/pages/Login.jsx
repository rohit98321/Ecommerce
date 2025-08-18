import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {asyncloginuser} from "../Redux/actions/UserAction"



const Login = () => {


    const dispatch=useDispatch()
    const navigate=useNavigate()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (user) => {
   
    dispatch(asyncloginuser(user))
    reset()
    navigate("/")
    
  };

  return (
    <div className="border w-[600px]  h-[600px] p-10 rounded bg-[#1C352D] text-[#FBF3D5]">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(loginHandler)}
      >
        <input
          {...register("email", { required: "email id must be enter" })}
          type="email"
          className="border-b outline-0"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.email.message}
          </p>
        )}

        <input
          {...register("password", { required: "password must be enter" })}
          type="password"
          className="border-b outline-0"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.password.message}
          </p>
        )}

        <button
          className="bg-[#239BA7] w-[200px] h-[100] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#C5B0CD]"
        >
          Login
        </button>

        <div className="flex gap-1 justify-center">
          <h4>don't have an account</h4>
          <Link className="text-blue-400" to={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
