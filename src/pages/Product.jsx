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
import RelatedProduct from "../components/Relatedproduct";
import Title from "../components/Title";

const Product = () => {
  const { productId } = useParams();
  const { products, formatPrice, addToCart } = useContext(ShopContext); // Access formatPrice
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
  }, [productId, products]);

  return productData ? (
    <>
      <div className="product-display">
        <div className="product-display-sub">
          <div className="product-display-sub2">
            <div className="product-display-sub3">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt={`Product ${index}`}
                  className="image-display"
                  onClick={() => setImage(item)} //
                />
              ))}
            </div>
            <div className="main-and-text">
              <div className="product-main-image">
                <img
                  src={image}
                  alt="Selected product"
                  className="selected-image"
                />
              </div>
            </div>

            <div className="product-details">
              <h1>
                <span>Name:</span> {productData.name}
              </h1>
              <h3>
                <span>Price:</span> {formatPrice(productData.price)}{" "}
                {/* Use formatPrice */}
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
                <span>Features:</span> {productData.features}
              </p>
              <p>
                <span>Descriptions:</span> {productData.description}
              </p>
              <button onClick={() => addToCart(productData._id)}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Title text1={"Related"} text2={"Projects"} />

        <RelatedProduct
          Category={productData.Category}
          subCategory={productData.subCategory || "defaultSubCategory"}
        />

        <OurPolicy />
        <Footer1 />
        <Footer2 />
      </div>
    </>
  ) : (
    <div style={{ opacity: "0" }}></div>
  );
};

export default Product;
