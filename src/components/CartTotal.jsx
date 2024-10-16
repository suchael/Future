import { useContext } from "react";
import "./../Styles/cart.css";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="Total-cart-total">
      <div className="cart-total">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="cart-total-sub">
        <div className="cart-total-details">
          <h2>Subtotal:</h2>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="cart-total-details">
          <h2>Shipping Fee:</h2>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>
        <hr className="hr" />
        <div className="cart-total-details">
          <h1>Total:</h1>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
