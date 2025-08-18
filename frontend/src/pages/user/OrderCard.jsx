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
      <div className='border w-[1300px]  p-5 my-[100px] flex gap-5 mx-auto h-[200px] bg-[#1C352D] '>

              <div className='w-[100px] h-[100px] overflow-hidden'>
                  <img src={order.image} alt="" />
              </div>


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
    )
  }

  export default OrderCard