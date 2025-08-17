import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../reducers/UserSlice'
import  productReducer  from '../reducers/ProductSlice'
import  orderReducer  from '../reducers/OrderSlice'

export const store = configureStore({
  reducer:{
    user:userReducer,
    product:productReducer,
    order:orderReducer
  } ,
})