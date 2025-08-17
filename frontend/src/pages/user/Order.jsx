import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from './OrderCard'

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
    <div>

        {render}

       

    </div>
  )
}

export default Order