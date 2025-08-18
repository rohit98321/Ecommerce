
import { useSelector } from "react-redux";
import axios from "../../api/config"
import {loadOrders} from "../reducers/OrderSlice"







export const asyncgetorders =()=> async (dispatch,getstate)=>{
        try {
            const {data}=await axios.get("orders/");
            dispatch(loadOrders(data));
            
        } catch (error) {
            console.log(error);
            
        }
}    

export const asyncincreaseorder =(id)=> async (dispatch,getstate)=>{
    try {

        const orders=getstate().order.orders;
        const existorder=orders.find((o)=> o.id == id)

        

        
   
            const updateorder={...existorder,quantity:existorder.quantity+1}
            console.log("updateorder",updateorder);
            const res=await axios.patch(`/orders/${id}`,updateorder)
            console.log("updated order", res.data);
            dispatch(asyncgetorders())
       


    } catch (error) {
        console.log(error);
        
    }
} 




export const asyncdecreaseorder =(id)=> async (dispatch,getstate)=>{
    try {

        const orders=getstate().order.orders;
        const existorder=orders.find((o)=> o.id == id)

        const updateorder={...existorder,quantity:existorder.quantity-1}
        console.log(updateorder);
        
            if(existorder.quantity <=1){
                await axios.delete(`/orders/${existorder.id}`)
                dispatch(asyncgetorders())
            }
            else{
                
                const updateorder={...existorder,quantity:existorder.quantity-1}
                console.log("updateorder",updateorder);
                const res=await axios.patch(`/orders/${id}`,updateorder)
                console.log("updated order", res.data);
                dispatch(asyncgetorders())
            }   
       


    } catch (error) {
        console.log(error);
        
    }
} 




export const  asyncorderplace=(order)=> async (dispatch,getstate)=>{

    try {
              
               const user=getstate().user.users;
               const od=getstate().order.orders;
               console.log("user.id and orders.userid",user.id ,od);
               const existorder=od.find((o) => user.id == o.userid && o.title===order.title)
               console.log("exist orders",existorder);

                if(existorder){
                        const updateorder={...existorder,quantity:existorder.quantity+1};
                        console.log("updated order" ,updateorder);
                        await axios.patch(`/orders/${existorder.id}`,updateorder)
                        dispatch(asyncgetorders())
                }
                else{

                    await axios.post("/orders" ,order)
                    dispatch(asyncgetorders())
                }



           
           

        } catch (error) {
            console.log(error);
            
        }

}


