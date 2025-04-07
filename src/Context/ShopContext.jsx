import React, { createContext, useState } from "react";
import AllProduct from '../Component/Assest/all_product';  // Assuming this is the data you're importing
import all_product from "../Component/Assest/all_product";

export const ShopContext = createContext(null);
const getDefaultCart= ()=>{
  let cart = {}
  for (let index = 0; index < AllProduct.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState (getDefaultCart())


const addToCart = (itemId) => {
  setCartItems ((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  
}
const removeFromCart = (itemId) => {
  setCartItems ((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const getTotalCartAmount = ()=> {
  let totalAmount =  0
  for (const item in cartItems)
  {
    if(cartItems[item]>0)
    {
      let itemInfo = AllProduct.find((product)=>product.id===Number(item))
      totalAmount += itemInfo.new_price * cartItems [item]
    }
  }
  return totalAmount
}

const getTotalCartItems = ()=> {
  let totalItem = 0
  for (const item in cartItems)
  {
    if(cartItems[item]>0)
    {
      totalItem+= cartItems[item]
    }
  }
  return totalItem
}

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product: AllProduct, cartItems, addToCart, removeFromCart }; // Updated the name to 'all_product'
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
