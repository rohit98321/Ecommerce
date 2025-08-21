import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/config";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../pages/user/Card";

const Home = () => {
  const user = useSelector((state) => state.user.users);
  console.log("user", user);

  // const data=useSelector((state)=>state.product.products)
  // console.log(data);

  const [products, setproducts] = useState([])
  const [hasMore, sethasMore] = useState(true)

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`/products?_limit=8&_start=${products.length}`);
        console.log(data);
        if(data.length>0){
          sethasMore(true)
          
          setproducts((prev) => [...prev, ...data])
        }
        else{
          sethasMore(false)
        }
        
      console.log("fetchproducts", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const render = products.map((product) => (
    <Card key={product.id} product={product} />
  ));

  return products.length > 0 ? (
   
      
    <InfiniteScroll
    dataLength={products.length}
    next={fetchProducts}
    hasMore={hasMore}
    loader={<h4>Loading..</h4>}
    endMessage={
      <p>
        <b>Yay! You have seen it all</b>
      </p>}
      className="flex gap-10 p-10  flex-wrap"
    >

      {render}
      
    </InfiniteScroll>
      
     
  ) : (
    "Loading.."
  );
};

export default Home;
