import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../Redux/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import {asyncupdateuser,asyncdeleteuser} from "../Redux/actions/UserAction";
import { useForm } from "react-hook-form";

const Setting = () => {
  const  data  = useSelector((state) => state.user.users);
  console.log(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username:data?.username,
      email:data?.email,
      password:data?.password
      
    },
  });



  const logoutHandler = () => {
    dispatch(logoutuser());
    navigate("/login");
  };

  const UpdateuserHandler = (user) => {
    dispatch(asyncupdateuser(data.id, user));
  };


  const deleteuserHandler=()=>{

      dispatch(asyncdeleteuser(data.id))
      console.log(data.id);

  }

  return (
    <div className="w-[550px] mx-auto mt-5 border p-10 bg-[#1C352D] box-content">
      <form
        className="flex flex-col gap-10 overflow-y-auto"
        onSubmit={handleSubmit(UpdateuserHandler)}
      >
        <input
          {...register("username", {
            required: "can't blank",
          })}
          type="text"
          className="border-b outline-0"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-[15px] text-red-400 mt-[-2%] ">
            {errors.username.message}
          </p>
        )}

        <input
          {...register("email", { required: "can't blank" })}
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
          {...register("password", { required: "can't blank" })}
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
          Update user
        </button>

        <button
        onClick={logoutHandler}
        className="bg-[#239BA7] w-[200px] h-[100] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#C5B0CD]"
      >
        Logout
      </button>

      <button
        onClick={deleteuserHandler}
        className="bg-[#E43636] w-[200px] h-[100] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#8A0000]"
      >
        Delete
      </button>

        
      </form>

     
    </div>
  );
};

export default Setting;
