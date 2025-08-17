import axios from "../../api/config"
import { toast } from "react-toastify";
import {loginuser} from '../reducers/UserSlice'
import { logoutuser } from "../reducers/UserSlice";
import { useNavigate } from "react-router-dom";



    


export const asyncregisteruser=(user) => async (dispatch,getstate)=>{

    try {

       const res= await axios.post("/users",user)
       console.log(res.data);
       toast.success("successfully registered")



    } catch (error) {
        console.log(error);
        
    }

}


export const asynccurrentruser=() => async (dispatch,getstate)=>{

    try {

      const user=JSON.parse(localStorage.getItem("user"));

      if(user){

          dispatch(loginuser(user))
         
      }else{
        console.log("user not logged in");
      }



    } catch (error) {
        console.log(error);
        
    }

}


export const asyncupdateuser=(id,user) => async (dispatch,getstate)=>{

    try {

       const res= await axios.patch("/users/"+id,user)
       console.log(res);
       localStorage.setItem("user",JSON.stringify(res.data))
       dispatch(loginuser(res.data))
       toast.success("updated")



    } catch (error) {
        console.log(error);
        
    }

}



export const asyncdeleteuser=(id) => async (dispatch,getstate)=>{

    try {

       const res= await axios.delete("/users/"+id)
       console.log( "deleteuser: ",res);
       dispatch(logoutuser())
       
       toast.success("deleted")



    } catch (error) {
        console.log(error);
        
    }

}


export const asyncloginuser=(user) => async (dispatch,getstate)=>{

    try {

       const res= await axios.get(`/users?email=${user.email}&password=${user.password}`)

       
    //    console.log(res.data[0]);
   
       

       if(res.data[0]){
        localStorage.setItem("user",JSON.stringify(res.data[0]))
        dispatch(loginuser(res.data[0]))
        toast.success("successfully logged In")
       }else{
        toast.warning("Register first")
       }
       
               

                        // toast.info("Hello!", { position: "top-center" });
                

    } catch (error) {
        console.log(error);
        
    }

}