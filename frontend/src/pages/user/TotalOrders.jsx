import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion";

const TotalOrders = ({order}) => {

    const orders=useSelector((state)=>state.order.orders)
    const [count, setcount] = useState(0)

    const inc=()=>{
        const count=0;
        count++
        setcount(count);
    }

    console.log(order);
    const totalprice=orders.reduce((acc,item)=>{
   
        return acc+item.price*item.quantity;
    },0)

   
   
   
    

  return (
    <div className='w-[500px] absolute right-0 bg-[#152A38] rounded-2xl gap-5  h-[500px] flex flex-col justify-center items-center'>

        <h1>Items : {count}</h1>
        <h1 className='text-[#06923E]'><span className='text-indigo-50'>Total Price </span> ₹ {totalprice}</h1>


        <motion.button
         
          whileTap={{ scale: 0.9 }}
          type="button"
          whileHover={{ scale: 1.05 }}
          className="bg-[#06923E] text-white px-4 py-2 rounded-xl hover:bg-[#3F7D58] transition"
          >
          Place Order
        </motion.button>

        

        
    </div>
  )
}

export default TotalOrders