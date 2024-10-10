import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/Newarrival.css";
import Title from "./Title";

const NewArrival = () => {
  useContext(ShopContext);

  // Use 'products' here if needed
  return (
    <div className="newarrival">
      <div className="newarrival-sub">
        <Title text1="LATEST" text2="ARRIVAL" />
      </div>
    </div>
  );
};

export default NewArrival;
