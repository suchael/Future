import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import "./../Styles/placeorder.css";
const Placeorder = () => {
  return (
    <div className="place-order">
      <div className="place-order-info">
        <div className="sub-place-info">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="total-input-cont">
          <div className="name-section">
            <input
              className="input-info"
              type="text"
              placeholder="First name"
            />
            <input className="input-info" type="text" placeholder="Last name" />
          </div>
          <input
            className="input-info"
            type="email"
            placeholder="Email address"
          />
          <input className="input-info" type="Email" placeholder="Street" />
          <div className="name-section">
            <input className="input-info" type="text" placeholder="City" />

            <input className="input-info" type="text" placeholder="State" />
          </div>
          <div className="name-section">
            <input className="input-info" type="number" placeholder="Zipcode" />

            <input className="input-info" type="text" placeholder="Country" />
          </div>
          <input className="input-info" type="number" placeholder="Phone" />
        </div>
      </div>
      {/* Right side */}
      <div>
        <div>
          <CartTotal />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <Title text1={"Payment"} text2={"Method"} />
          <div className="payment-method">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
