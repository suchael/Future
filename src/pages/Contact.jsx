import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import OurPolicy from "../components/OurPolicy";
import "./../Styles/contact.css";
import Title from "../components/Title";
import contactusimg from "./../assets/contact-img.png";

const Contact = () => {
  return (
    <>
      <div className="about-title-div">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="title-sub-details">You are a dial away</p>
      </div>

      <div className="total-about">
        <div className="about contact">
          <img src={contactusimg} alt="Contact Us image" />
        </div>
        <div className="about-details contact-details">
          <h3>Our Store</h3>
          <address>
            <p>Location: Yaba Left, Lagos</p>
            <p>
              Phone: <a href="tel:+2349074848927">0907 484 8927</a>
            </p>
            <p>
              Email: <a href="mailto:jndvknis@gmail.com">jndvknis@gmail.com</a>
            </p>
          </address>
          <Link to="/collection">
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>
      </div>

      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Contact;
