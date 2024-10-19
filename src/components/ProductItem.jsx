import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import "./../Styles/Newarrival.css";

const ProductItem = ({ id, image, name, price }) => {
  const { formatPrice } = useContext(ShopContext); // Get formatPrice from context

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
            <p>
              <span>{formatPrice(price)}</span> {/* Use formatPrice directly */}
            </p>

            <button>Buy</button>
          </div>
        </div>
      </Link>
    </>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
