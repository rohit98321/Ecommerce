import axios from "../../api/config"
import {loadOrders} from "../reducers/OrderSlice"


// export const asyncgetorders =()=(dispatch,getstate)=>{
//         try {
//             const orders=await axios.get("orders/");
            
//         } catch (error) {
//             console.log(error);
            
//         }
// }    
export const asyncorderplace=(order)=> async (dispatch,getstate)=>{

    try {
             await axios.post("/orders" ,order)
            const res=await axios.get("/orders")
            console.log( 'res',res.data);
            dispatch(loadOrders(res.data)) 

        } catch (error) {
            console.log(error);
            
        }

}