import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/Newarrival.css";
import Title from "./Title";
import ProductItem from "./../components/ProductItem";

const NewArrival = () => {
  const { products } = useContext(ShopContext);
  const [newArrival, setNewArrival] = useState([]); // Fixing useState usage

  useEffect(() => {
    if (products) {
      setNewArrival(products.slice(0, 10));
    }
  }, [products]); // Ensure products is a dependency

  return (
    <div className="newarrival">
      <div className="newarrival-sub">
        <Title text1="LATEST" text2="ARRIVAL" />
        <p className="title-text-sub">Introducing our latest products</p>
      </div>
      {/* Display new arrival products */}
      <div className="render-product">
        {newArrival.length > 0 ? (
          newArrival.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>No new arrivals to display.</p>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
