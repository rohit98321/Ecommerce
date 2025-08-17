import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../pages/user/Card'


const Home = () => {

  
  const user=useSelector((state)=>state.user.users)
  console.log( "user",user);


 

  const data=useSelector((state)=>state.product.products)
  console.log(data);

  const render=data.map((product)=>(

      <Card key={product.id} product={product} />
    
  ))
  


  return (
    <div className='flex gap-10 p-10 flex-wrap'>{render}</div>
  )
}

export default Home