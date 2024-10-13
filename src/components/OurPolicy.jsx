import shaking from "./../assets/shaking.png";
import support from "./../assets/support.png";
import ticktick from "./../assets/ticktick.png";
const OurPolicy = () => {
  return (
    <div className="total-policy">
      <div className="policy">
        <div>
          <img src={shaking} alt="" />
          <h2>Easy Excellent Policy</h2>
          <p>we give the best options</p>
        </div>

        <div>
          <img src={support} alt="" />
          <h2>Customer Service</h2>
          <p>Our dedicated customer service team is here to assist you 24/7</p>
        </div>
      </div>
      <div>
        <img src={ticktick} alt="" />
        <h2>7 days return policy</h2>
        <p>we also offer 7 days return policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
