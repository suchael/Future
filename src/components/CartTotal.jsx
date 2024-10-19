import { useContext } from "react";
import "./../Styles/cart.css";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { deliveryFee, getCartAmount, formatPrice } = useContext(ShopContext);

  return (
    <div className="Total-cart-total">
      <div className="cart-total">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="cart-total-sub">
        <div className="cart-total-details">
          <h2>Subtotal:</h2>
          <p>
            {/* Use formatPrice to display subtotal */}
            {formatPrice(getCartAmount())}
          </p>
        </div>
        <hr />
        <div className="cart-total-details">
          <h2>Shipping Fee:</h2>
          <p>
            {/* Use formatPrice to display delivery fee */}
            {formatPrice(deliveryFee)}
          </p>
        </div>
        <hr className="hr" />
        <div className="cart-total-details">
          <h1>Total:</h1>
          <b>
            {/* Use formatPrice to display total amount */}
            {formatPrice(
              getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee
            )}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
