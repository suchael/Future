import { useContext, useEffect, useState } from "react";
import "./../Styles/bestseller.css";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/Newarrival.css";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div>
      <div className="newarrival-sub">
        <Title text1="BEST" text2="SELLER" />
        <p className="title-text-sub">What our Customers Love</p>
      </div>
      <div className="render-product">
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p>No best-selling products available.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
