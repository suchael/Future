import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import "./../Styles/placeorder.css";
import transferimg from "./../assets/transferlogo.png";
import paypal from "./../assets/paypalservice.png";
import { ShopContext } from "../context/ShopContext";
import OurPolicy from "../components/OurPolicy";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

const Placeorder = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to cash on delivery
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [uploadMessage, setUploadMessage] = useState(""); // State to track upload status
  const { navigate } = useContext(ShopContext);

  // Load saved order details from local storage when the component mounts
  useEffect(() => {
    const savedOrder = localStorage.getItem("orderDetails");
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  // Handle payment method change
  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setPaymentMethod(selectedMethod);

    // Check if selected method is bank transfer or PayPal
    if (selectedMethod === "bank-transfer" || selectedMethod === "paypal") {
      toast.error(
        "Bank Transfer and PayPal payment methods are not available. Please use Cash on Delivery."
      );
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate upload logic
      console.log("File uploaded:", file);
      setUploadMessage(
        "Transfer proof uploaded successfully. Awaiting confirmation."
      );

      // Trigger the toast notification for successful upload
      toast.success("Transfer proof uploaded successfully!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Save the order details to local storage
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    toast.success("Order placed successfully!");
  };

  return (
    <>
      <div className="place-order">
        {/* Left Side: Delivery Information */}
        <div className="place-order-info">
          <div className="sub-place-info">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="total-input-cont">
            <div className="name-section">
              <input
                className="input-info"
                type="text"
                name="firstName"
                value={orderDetails.firstName}
                onChange={handleInputChange}
                placeholder="First name"
              />
              <input
                className="input-info"
                type="text"
                name="lastName"
                value={orderDetails.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
              />
            </div>
            <input
              className="input-info"
              type="email"
              name="email"
              value={orderDetails.email}
              onChange={handleInputChange}
              placeholder="Email address"
            />
            <input
              className="input-info"
              type="text"
              name="street"
              value={orderDetails.street}
              onChange={handleInputChange}
              placeholder="Street"
            />
            <div className="name-section">
              <input
                className="input-info"
                type="text"
                name="city"
                value={orderDetails.city}
                onChange={handleInputChange}
                placeholder="City"
              />
              <input
                className="input-info"
                type="text"
                name="state"
                value={orderDetails.state}
                onChange={handleInputChange}
                placeholder="State"
              />
            </div>
            <div className="name-section">
              <input
                className="input-info"
                type="number"
                name="zipcode"
                value={orderDetails.zipcode}
                onChange={handleInputChange}
                placeholder="Zipcode"
              />
              <input
                className="input-info"
                type="text"
                name="country"
                value={orderDetails.country}
                onChange={handleInputChange}
                placeholder="Country"
              />
            </div>
            <input
              className="input-info"
              type="number"
              name="phone"
              value={orderDetails.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
        </div>

        {/* Right Side: Payment Section */}
        <div>
          <div className="cart-inside-placeorder">
            <CartTotal />
          </div>

          <div style={{ marginTop: "4rem" }}>
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="payment-method">
              {/* Payment Method Options */}
              <div className="total-transfer-cont">
                <div className="transfer-div">
                  <label className="label-payment">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      onChange={handlePaymentMethodChange}
                    />
                    <img src={transferimg} alt="" />
                    Bank Transfer
                  </label>
                </div>
                <div className="transfer-div">
                  <label className="label-payment">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      onChange={handlePaymentMethodChange}
                    />
                    <img className="paypal-logo" src={paypal} alt="" />
                  </label>
                </div>
                <div className="transfer-div">
                  <label className="label-payment">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      onChange={handlePaymentMethodChange}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {/* Render based on selected payment method */}
              {paymentMethod === "bank-transfer" && (
                <div className="bank-transfer-info">
                  <p>
                    Please transfer the total amount to the following bank
                    account:
                  </p>
                  <p>Bank Name: XYZ Bank</p>
                  <p>Account Number: 123456789</p>
                  <p>Sort Code: 00-00-00</p>
                  <div className="total-upload-transfer-proof">
                    <div className="upload-transfer-proof">
                      <label className="label-proof">
                        Upload transfer proof:
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                      />
                    </div>

                    <p className="transfer-message">
                      Once you transfer the amount, upload a screenshot or photo
                      of the receipt for verification.
                      <br /> You will receive a confirmation email once we
                      verify the payment.
                    </p>
                    <div className="upload-success-cont">
                      {uploadMessage && (
                        <p className="upload-success">{uploadMessage}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="paypal-info">
                  <p>
                    You will be redirected to PayPal to complete the payment.
                  </p>
                  <button className="paypal-button">Pay with PayPal</button>
                </div>
              )}

              {paymentMethod === "cod" && (
                <div className="cash-on-delivery-info">
                  <p>Payment will be collected at the time of delivery.</p>
                  <p>Please ensure you have the exact amount in cash.</p>
                </div>
              )}
            </div>
          </div>
          <div className="place-order-div">
            <button
              className="checkout-btn placeorder-btn"
              onClick={() => {
                if (paymentMethod === "cod") {
                  handlePlaceOrder(); // Place the order if Cash on Delivery is chosen
                  navigate("./order"); // Navigate to the order page
                } else {
                  toast.error("Please choose Cash on Delivery to proceed."); // Show error if another payment method is selected
                }
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>

        {/* Toastify container */}
      </div>
      <ToastContainer />
      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Placeorder;
