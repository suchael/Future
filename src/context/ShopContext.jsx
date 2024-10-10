import { createContext } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "₦";
  const delivery_fee = 7500;
  const value = {
    products,
    currency,
    delivery_fee,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
