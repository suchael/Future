import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import "./../Styles/Newarrival.css";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <>
      <Link
        to={`/products/${id}`}
        style={{ color: "#fff", cursor: "pointer" }}
        className="link-product"
      >
        <div className="Total-link-product-sub">
          <div className="link-product-sub">
            <img src={image[0]} alt="" className="link-image" />
          </div>

          <div className="item-details">
            <p>{name}</p>
            {currency}

            {price}
            <button>Buy</button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
