import {lazy} from "react"
import React from 'react'
import {Route,Routes} from "react-router-dom"



const Home=lazy(()=> import("../pages/Home"))
const Login=lazy(()=> import("../pages/Login"))
const Register=lazy(()=> import('../pages/Register'))
const PageNotFound=lazy(()=> import('../pages/PageNotFound'))
const Setting=lazy(()=> import('../pages/Setting'))
const CreateProduct=lazy(()=> import('../pages/admin/CreateProduct'))
const SingleProduct=lazy(()=> import('../pages/SingleProduct'))
const Auth=lazy(()=> import('./Auth'))
const Order=lazy(()=> import('../pages/user/Order'))
const OrderCard=lazy(()=> import('../pages/user/OrderCard'))
import AdminAuth from "./AdminAuth"


const MainRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<PageNotFound/>} />

           

            //authenticate routes
            <Route path='/user/setting' element={ <Auth> <Setting/> </Auth>} />
            <Route path='/user/order' element={ <Auth> <Order/> </Auth>} />
            <Route path='/user/order/ordercard/:id' element={ <Auth> <OrderCard/> </Auth>} />
            
            <Route path='admin/createproduct' element={<Auth> <CreateProduct/> </Auth>} />
            <Route path="singleproduct/:id" element={ <SingleProduct/> } />

           

        </Routes>
    </div>
  )
}

export default MainRoutes