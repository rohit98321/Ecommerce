 import React from 'react'
import { useDispatch } from 'react-redux'
import {asyncincreaseorder,asyncdecreaseorder} from '../../Redux/actions/OrderAction'
  


  const OrderCard = ({order}) => {

      const dispatch=useDispatch()
      const id =order.id

      
      const increaseorder=()=>{
          dispatch(asyncincreaseorder(id))
      }

      const decreaseorder=()=>{
        dispatch(asyncdecreaseorder(id))
    }


    return (
      <div className=' w-screen   p-5  flex flex-col  justify-between gap-5 mx-auto h-full bg-[#1C352D] '>

              <div className='w-[900px] h-[200px] bg-[#465C88] flex items-center justify-evenly'>

              <div className='  flex justify-center w-[200px] h-[200px] overflow-hidden'>
                  <img src={order.image} alt="" />
              </div>

              <h1 className='text-green-500 text-3xl'>₹{order.price}</h1>


              <div className='flex justify-center items-center gap-5'>
              <button
               className='text-5xl'
               onClick={decreaseorder}
               >-</button>
              <h1> Quantity: {order.quantity}</h1>
              <button
              className='text-5xl'
              onClick={increaseorder}
              >+</button>
              </div>
              </div>


              
                  

      </div>
    )
  }

  export default OrderCard