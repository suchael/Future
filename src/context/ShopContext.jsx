import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "USD"; // Use currency code, e.g., 'USD'
  const deliveryFee = 7500;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Add to cart function
  const addToCart = (itemId) => {
    if (!itemId) {
      toast.error("No item selected");
      return; // Ensure to exit the function if no item is selected
    }

    let cartData = structuredClone(cartItems); // Make a copy of cart items

    // Increment quantity or initialize
    cartData[itemId] = (cartData[itemId] || 0) + 1;

    setCartItems(cartData); // Update the cart state
    toast.success("Item added to cart!"); // Notify user of success
  };

  // Get total number of items in cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (totalCount, quantity) => totalCount + quantity,
      0
    );
  };

  // Update item quantity or remove it if less than 1
  const updateQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (quantity < 1) {
      delete cartData[itemId]; // Remove item if quantity is less than 1
    } else {
      cartData[itemId] = quantity; // Update quantity
    }
    setCartItems(cartData);
  };

  // Calculate total cart amount
  const getCartAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      const itemInfo = products.find((product) => product._id === itemId);
      const quantity = cartItems[itemId];
      return totalAmount + (itemInfo ? itemInfo.price * quantity : 0);
    }, 0);
  };

  // Format price function
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // Dynamic currency
    }).format(price);
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
    updateQuantity,
    getCartAmount,
    navigate,
    formatPrice,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
