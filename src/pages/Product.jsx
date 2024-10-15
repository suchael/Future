import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/product.css";
const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="product-display">
      <div className="product-display-sub">
        <div className="product-display-sub2">
          <div className="product-display-sub3">
            {productData.image.map((item, index) => {})}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ opacity: "0" }}></div>
  );
};

export default Product;
