import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { ShopContext } from "../context/ShopContext";
import "./../Styles/relatedproduct.css";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ Category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products by Category and subCategory
      const filteredProducts = products
        .filter((item) => item.Category === Category)
        .slice(0, 5); // Limit to 5 products

      setRelated(filteredProducts); // Update the state with the filtered products
    }
  }, [products, Category, subCategory]); // Run effect when products, Category, or subCategory changes

  return (
    <div className="render-product">
      {related.length > 0 ? (
        related.map((product) => (
          <ProductItem
            key={product._id}
            name={product.name}
            id={product._id}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <p className="not-found">No related products found.....</p>
      )}
    </div>
  );
};

// Prop validation for Category and subCategory
RelatedProduct.propTypes = {
  Category: PropTypes.string.isRequired, // Category must be a string and is required
  subCategory: PropTypes.string.isRequired, // subCategory must be a string and is required
};

export default RelatedProduct;
