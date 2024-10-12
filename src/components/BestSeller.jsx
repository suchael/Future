import { useContext, useEffect, useState } from "react";
import "./../Styles/bestseller.css";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const { bestSeller, setBestSeller } = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slic(0, 5));
  }, []);
  return (
    <div>
      <div className="newarrival-sub">
        <Title text3={"BEST"} text4={"SELLER"} />
        <p className="title-text-sub">What our Customers Love</p>
      </div>
    </div>
  );
};

export default BestSeller;
