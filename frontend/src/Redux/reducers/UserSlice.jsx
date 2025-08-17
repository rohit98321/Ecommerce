import { createSlice } from "@reduxjs/toolkit";

    const initialState={
        users:""
    }

 const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

        loginuser:(state,action)=>{

            console.log(action.payload);
            state.users=action.payload
        },
        logoutuser:(state,action)=>{
            state.users="";
            localStorage.removeItem("user")
            
        }

    }
})

export const {loginuser,logoutuser}=userSlice.actions;
export default userSlice.reducer;