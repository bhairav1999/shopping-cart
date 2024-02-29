import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/cart/CartSlice";

const Product = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (  
    <>
    <hr />
     <div className="flex flex-wrap justify-center m-10 gap-[100px]">
      {product.map((item) => {
        return (
          <div className="relative h-[350px] w-[350px] rounded-md">
            <img
              src={item.image}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{item.category}</h1>
              <p className="mt-2 text-sm text-gray-300">
               {item.description.slice(0,80)}
              </p>
              <button onClick={()=> dispatch(addCart(product))} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                Add To Cart →
              </button>
            </div>
          </div>
        );
      })}
      </div>
   
    </>
  );
};

export default Product;
