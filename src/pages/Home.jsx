import BestSeller from "../components/BestSeller";
import ChooseUs from "../components/ChooseUs";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrival />
      <BestSeller />
      <ChooseUs />
      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
