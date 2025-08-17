import { createSlice } from "@reduxjs/toolkit";


    const initialState={
        orders:[]
    }

const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{

        loadOrders:(state,actions)=>{
            
            state.orders=actions.payload
            console.log("orders",state.orders);

        }

    }
})

export default orderSlice.reducer
export const {loadOrders} =orderSlice.actions