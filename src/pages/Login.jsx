import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../Styles/login.css";
import OurPolicy from "../components/OurPolicy";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  // Function to toggle between 'Login' and 'Sign up'
  const toggleState = () => {
    setCurrentState((prevState) =>
      prevState === "Login" ? "Sign up" : "Login"
    );
  };

  // Function to handle form submission and show appropriate toast notification
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentState === "Sign up") {
      toast.success("Sign Up Successfull");
    } else {
      toast.success("Welcome Back!");
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="sub-login-form">
          <p>{currentState}</p>
          <hr style={{ width: "2rem" }} />
        </div>
        <div className="fillin-details">
          {/* Conditionally render the 'Name' field for 'Sign up' state */}
          {currentState === "Sign up" && (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="form-options">
            <p
              style={{
                cursor: "pointer",
                color: "#fff",
                fontSize: "1.2rem",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {currentState === "Login" ? "Forgot password?" : ""}
            </p>
            <p className="toggle-link" onClick={toggleState}>
              {currentState === "Login"
                ? "Create an account"
                : "Already have an account? Login Here"}
            </p>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            {currentState}
          </button>
        </div>
      </form>

      {/* ToastContainer renders the toasts */}
      <ToastContainer
        position="top-right"
        autoClose={3000} // The toast will disappear after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Login;
