import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {asyncregisteruser} from "../Redux/actions/UserAction"

const Register = () => {


  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin=false;
    
    dispatch(asyncregisteruser(user));
    navigate("/login")
    reset()
  };

  return (
    <div className="border w-[600px] h-[600px] p-10 rounded bg-[#1C352D] text-[#FBF3D5]">
      <form
        className="flex flex-col gap-10 overflow-y-auto"
        onSubmit={handleSubmit(registerHandler)}
      >
        <input
          {...register("username", { required: "without username can't register" })}
          type="text"
          className="border-b outline-0"
          placeholder="Username"
        />
        {errors.username && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.username.message}</p>}


        <input
          {...register("email", { required: "email id must be enter" })}
          type="email"
          className="border-b outline-0"
          placeholder="Email"
        />
        {errors.email && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.email.message}</p>}


        <input
          {...register("password", { required: "password must be enter" })}
          type="password"
          className="border-b outline-0"
          placeholder="Password"
        />
        {errors.password && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.password.message}</p>}

        <button className="bg-[#239BA7] w-[200px] h-[100] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#C5B0CD]">Register</button>


                <div className="flex gap-2 justify-center">
                  <h4>Already have account</h4>
               <Link className="text-blue-400" to={"/login"}>Login</Link>
                </div>
      </form>
    </div>
  );
};

export default Register;
