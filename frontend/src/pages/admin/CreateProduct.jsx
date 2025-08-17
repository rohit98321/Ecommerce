import React from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
import { useDispatch } from 'react-redux'
import {asynccreateproduct} from "../../Redux/actions/ProdcutAction"
import {useNavigate} from "react-router-dom"

const CreateProduct = () => {

  const navigate=useNavigate()

  const {register,handleSubmit,formState:{errors}}=useForm()
  const dispatch=useDispatch()

  const productHandler=(product)=>{

    product.id=nanoid()
    // console.log(product);
    dispatch(asynccreateproduct(product))
    navigate("/")
    
  }
  
  return (
    <div className="border w-[600px] h-[600px] my-5 p-10 rounded bg-[#1C352D] text-[#FBF3D5]">
      <form
        className="flex flex-col my-5 gap-10 overflow-y-auto"
        onSubmit={handleSubmit(productHandler)}
      >
        <input
          {...register("title", { required: "without title can't register" })}
          type="text"
          className="border-b outline-0"
          placeholder="Title"
        />
        {errors.title && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.title.message}</p>}


        <input
          {...register("price", { required: "price id must be enter" })}
          type="Number"
          className="border-b outline-0"
          placeholder="Price"
        />
        {errors.price && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.price.message}</p>}


        <input
          {...register("image", { required: "image must be enter" })}
          type="url"
          className="border-b outline-0"
          placeholder="Image Url"
        />
        {errors.image && <p className="text-[15px] text-red-400 mt-[-2%] ">{errors.image.message}</p>}


        <input
          {...register("description", { required: "description must be enter" })}
          type="text"
          className="border-b outline-0"
          placeholder="description"
        />
        

        <button className="bg-[#239BA7] w-[200px] h-[100] mx-auto text-white rounded-md 
               transition-transform duration-300 
               hover:scale-105 hover:bg-[#C5B0CD]">Create Product</button>


      </form>
    </div>
  )
}

export default CreateProduct