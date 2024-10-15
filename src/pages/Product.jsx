import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/product.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import OurPolicy from "../components/OurPolicy";
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  // Fetch the product data based on productId
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set the first image as default
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]); // Add 'products' as a dependency

  return productData ? (
    <>
      <div className="product-display">
        <div className="product-display-sub">
          <div className="product-display-sub2">
            <div className="product-display-sub3">
              {/* Display the list of images */}
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt={`Product ${index}`}
                  className="image-display"
                  onClick={() => setImage(item)} // Clicking on an image will set it as the main image
                />
              ))}
            </div>
            <div className="main-and-text">
              <div className="product-main-image">
                {/* Display the selected image */}
                <img
                  src={image}
                  alt="Selected product"
                  className="selected-image"
                />
              </div>
            </div>
            {/* Image details */}
            <div className="product-details">
              <h1>
                <span>Name:</span>
                {productData.name}
              </h1>
              <h3>
                <span>Price:</span>
                {currency} {productData.price}
              </h3>
              <div className="star-images">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                <CiStar />
                <p>(1,334)</p>
              </div>
              <p>
                <span>Features:</span>
                {productData.features}
              </p>
              <p>
                <span>Descriptions:</span>
                {productData.description}
              </p>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </>
  ) : (
    <div style={{ opacity: "0" }}></div>
  );
};

export default Product;
