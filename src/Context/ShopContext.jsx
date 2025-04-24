import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [All_Product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // ✅ Load cart from server or localStorage
  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (token) {
      fetch("http://localhost:4000/getcart", {
        headers: {
          "auth-token": token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // 🛠 Handle cart response directly (MongoDB sends object)
          if (data && typeof data === "object") {
            setCartItems(data);
          } else {
            setCartItems(getDefaultCart());
          }
        })
        .catch((err) => {
          console.error("Failed to load user cart:", err);
          setCartItems(getDefaultCart());
        });
    } else {
      const guestCart =
        JSON.parse(localStorage.getItem("guest-cart")) || getDefaultCart();
      setCartItems(guestCart);
    }

    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };

      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/addtocart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        }).catch((err) => console.error("Add to cart error:", err));
      } else {
        localStorage.setItem("guest-cart", JSON.stringify(updatedCart));
      }

      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };

      // Call backend if the user is logged in
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              console.log("Item removed from cart successfully");
            } else {
              console.error("Failed to remove item from cart");
            }
          })
          .catch((err) => {
            console.error("Remove from cart error:", err);
          });
      } else {
        // If not logged in, save cart to localStorage
        localStorage.setItem("guest-cart", JSON.stringify(updatedCart));
      }

      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = All_Product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo?.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    All_Product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
