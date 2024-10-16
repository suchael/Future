import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/cart.css";
import Title from "./../components/Title";

import CartTotal from "../components/CartTotal";
import { GrTrash } from "react-icons/gr";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Collect product data and their respective quantities from cartItems
    const tempData = Object.keys(cartItems).map((itemId) => {
      return {
        _id: itemId,
        quantity: cartItems[itemId],
      };
    });
    setCartData(tempData);
  }, [cartItems]);

  return (
    <>
      <div className="cart-display">
        <div className="title-section">
          <Title text1={"MY"} text2={"CART"} />
        </div>
        <div>
          {cartData.length === 0 ? (
            <p className="not-found">Your cart is empty....</p>
          ) : (
            cartData.map((item, index) => {
              const product = products.find((p) => p._id === item._id);
              if (!product) return null; // If no matching product, skip

              return (
                <div key={index} className="cart-item">
                  <img src={product.image[0]} alt="product-name" />
                  <div className="cart-image-details">
                    <h1>{product.name}</h1>
                    <p>
                      {currency}
                      {product.price * item.quantity}
                    </p>
                  </div>
                  <input
                    onChange={(e) =>
                      e.target.value === " " || e.target.value === "0"
                        ? null
                        : updateQuantity(item._id, Number(e.target.value))
                    }
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    className="qauntity-input"
                  />
                  <GrTrash
                    onClick={() => updateQuantity(item._id, 0)}
                    className="trash-bin"
                  />
                </div>
              );
            })
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "2rem",
          }}
        >
          <div className="Cart-total-render">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
