import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from './OrderCard'
import { Link } from 'react-router-dom'
import TotalOrders from './TotalOrders'

const Order = () => {

    const user=useSelector((state)=> state.user.users)
    const orders=useSelector((state)=> state.order.orders)

    const order=orders.filter((order) => order.userid == user.id)
    console.log(order);

    const render=order.map((order)=>
    
    (
          
        <OrderCard key={order.id} order={order}/>
          
    ))



  return (
    <div className='flex flex-col'>
        
        {render}

        <TotalOrders order={order}/>
       

    </div>
  )
}

export default Order