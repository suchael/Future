import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 7500;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to cart function
  const addToCart = async (itemId) => {
    if (!itemId) {
      toast.error("No item selected");
      return;
    }
    let cartData = structuredClone(cartItems); // Make a copy of cart items

    if (cartData[itemId]) {
      cartData[itemId] += 1; // If item already exists in the cart, increment quantity
    } else {
      cartData[itemId] = 1; // Otherwise, initialize with 1
    }

    setCartItems(cartData); // Update the cart state
  };

  // Get total number of items in cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId]; // Sum up quantities of all items
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
