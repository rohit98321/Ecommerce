import React from 'react'

const OrderCard = ({order}) => {

  return (
    <div className='border w-[1300px]  p-5 my-[100px] flex gap-5 mx-auto h-[200px] bg-[#1C352D] '>

            <div className='w-[100px] h-[100px] overflow-hidden'>
                <img src={order.image} alt="" />
            </div>


            <div className='flex justify-center items-center gap-5'>
            <button>+</button>
            <h1> Quantity: {order.quantity}</h1>
            <button>+</button>
            </div>
                

    </div>
  )
}

export default OrderCard