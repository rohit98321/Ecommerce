import axios from "../../api/config";
import { toast } from "react-toastify";
import { loadProduct } from "../reducers/ProductSlice";
// import { loadProduct } from "../reducers/ProductSlice";

export const asynccreateproduct = (product) => async (dispatch, getstate) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncgetproducts());
    toast.success("product created");
  } catch (error) {
    console.log(error);
  }
};

export const asyncgetproducts = () => async (dispatch, getstate) => {
  try {
    const products = await axios.get("/products");
    console.log( "products",products.data);
    dispatch(loadProduct(products.data))

  } catch (error) {
    console.log(error);
  }
};


export const asyncupdateproduct = (id,product) => async (dispatch, getstate) => {
  try {
    const products = await axios.patch("/products/"+ id,product);
    console.log( "products",products.data);
    dispatch(asyncgetproducts())
    

  } catch (error) {
    console.log(error);
  }
};

export const asyncdeleteproduct = (id) => async (dispatch, getstate) => {
  try {
   await axios.delete("/products/"+ id);
    
    dispatch(asyncgetproducts());
    

  } catch (error) {
    console.log(error);
  }
};