import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
            loadProduct:(state,actions)=>{
                    state.products=actions.payload;
                    console.log(state.products);   
            }
    }
})

export default productSlice.reducer
export const {loadProduct}=productSlice.actions