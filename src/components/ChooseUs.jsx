import Title from "./Title";
import chooseus from "./../assets/heroimg2.png";
import "./../Styles/hero.css";

const ChooseUs = () => {
  return (
    <>
      <div className="newarrival-sub choose-us">
        <Title text1="CHOOSE" text2="US TODAY" />
      </div>
      <div className="total-choose-us">
        <div className="choose-left">
          <img src={chooseus} alt="" />
        </div>
        <div className="chooseus-text">
          <h3>Let’s be your gadget plug.</h3>
          <p>What are you looking for let’s go to collection</p>
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
