import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { ShopContext } from "../context/ShopContext";
import "./../Styles/relatedproduct.css";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ Category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products by Category
      const filteredProducts = products
        .filter((item) => item.Category === Category)
        .slice(0 > 5); // Limit to 5 products

      setRelated(filteredProducts); // Update the state with the filtered products
    }
  }, [products, Category]); // Run effect when products, Category, or subCategory changes

  return (
    <div className="render-product">
      {related.length > 0 ? (
        related.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))
      ) : (
        <p className="not-found">No related products found.....</p>
      )}
    </div>
  );
};

RelatedProduct.propTypes = {
  Category: PropTypes.string.isRequired, // Category must be a string and is required
  subCategory: PropTypes.string, // subCategory is not required anymore
};

export default RelatedProduct;
