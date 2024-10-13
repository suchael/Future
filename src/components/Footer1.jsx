import logo from "./../assets/logo.png";
const Footer1 = () => {
  return (
    <div className="footer1">
      <div>
        <img src={logo} alt="" className="logo" />
        <p>
          Welcome to Future, your ultimate destination for cutting-edge gadgets
          and innovative technology. At Future, we curate the latest and most
          advanced products designed to simplify and enhance your everyday life.
          Whether you&#39;re a tech enthusiast, a professional, or someone who
          loves staying ahead of the curve, we provide top-tier gadgets that
          blend style, performance, and functionality. Explore our collection
          and step into the future of technology today!
        </p>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <h3>Get in Touch</h3>
        <ul>
          <li>08169887054</li>
          <li>Email</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer1;
