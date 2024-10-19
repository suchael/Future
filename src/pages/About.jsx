import { Link } from "react-router-dom";
import "./../Styles/about.css";
import photoeffect from "./../assets/heroimg2.png";
import Title from "./../components/Title";
import OurPolicy from "../components/OurPolicy";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
const About = () => {
  return (
    <>
      <div className="about-title-div">
        <Title text1={"ABOUT"} text2={"US"} />
        <p className="title-sub-details">Let’s be your gadget plug.</p>
      </div>

      <div className="total-about">
        <div className="about">
          <img src={photoeffect} alt="" />
        </div>
        <div className="about-details">
          <p>
            At Future, we’re more than just a gadget store we’re your gateway to
            tomorrow&apos;s technology. Our mission is to bring you the latest,
            most innovative gadgets that enhance your life, making it smarter,
            more efficient, and a lot more fun. From sleek smartphones to
            cutting-edge smart home devices, we carefully curate every product
            to ensure quality, performance, and reliability.
          </p>
          <p>
            We believe the future should be within everyone’s reach, and that’s
            why we offer top-tier customer service, competitive prices, and a
            shopping experience designed to make your journey into the future
            seamless. Join us at Future, where innovation meets everyday life.
          </p>
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

export default About;
