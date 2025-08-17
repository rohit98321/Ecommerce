import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from '../pages/Register'
import PageNotFound from '../pages/PageNotFound'
import Setting from '../pages/Setting'
import CreateProduct from '../pages/admin/CreateProduct'
import SingleProduct from '../pages/SingleProduct'
import Auth from './Auth'
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
            
            <Route path='admin/createproduct' element={<Auth> <CreateProduct/> </Auth>} />
            <Route path="singleproduct/:id" element={<AdminAuth> <SingleProduct/> </AdminAuth>} />
           

        </Routes>
    </div>
  )
}

export default MainRoutes