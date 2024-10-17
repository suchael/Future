import { useContext, useState, useEffect } from "react";
import { ShopContext } from "./../context/ShopContext";
import Title from "./../components/Title";
import "./../Styles/order.css";

const Order = () => {
  const { products, currency, cartItems } = useContext(ShopContext); // get cartItems from context
  const [currentTime, setCurrentTime] = useState("");

  // Get the current time when the component is mounted
  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(`${formattedDate}, ${formattedTime}`);
  }, []);

  return (
    <div className="order">
      <div>
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>
      <div>
        {Object.keys(cartItems).map((itemId, index) => {
          const item = products.find((product) => product._id === itemId); // Find the product
          const quantity = cartItems[itemId]; // Get the quantity from cartItems

          if (!item) return null; // Skip if no product found

          return (
            <div key={index} className="cart-item order-item">
              <div className="cart-item-prod-detail order-total-package">
                <div className="order-image-details">
                  <div>
                    <img src={item.image[0]} alt={item.name} />
                  </div>
                  <div className="order-details">
                    <p>{item.name}</p>
                    <p>{`${currency}${item.price}`}</p>
                    <p>Quantity: {quantity}</p> {/* Displaying quantity */}
                    <p>
                      Date: <span>{currentTime}</span>{" "}
                      {/* Displaying current time */}
                    </p>
                  </div>
                </div>

                <div className="order-track">
                  <div className="order-status">
                    <p className="green-dot"></p>
                    <p>Order Placed</p>
                  </div>
                  <div>
                    <button className="track-btn">Track order</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
