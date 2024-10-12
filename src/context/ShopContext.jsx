import { createContext } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 7500;
  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
