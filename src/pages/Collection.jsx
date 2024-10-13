import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import "./../Styles/collection.css";
import { RxDropdownMenu } from "react-icons/rx";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="collection">
      <div className="Filter-options">
        <p className="filter" onClick={() => setShowFilter(!showFilter)}>
          FILTER
          <RxDropdownMenu
            className={`filter-img ${showFilter ? "rotata-90 " : ""}`}
          />
        </p>
        <div
          className={`filter-box ${showFilter ? "" : "hidden"}`}
          style={{
            border: "1px solid #fff",
            margin: "2rem 0",
            padding: "1rem 2rem",
            color: "#fff",
            backgroundColor: "#fff",
            cursor: "pointer",
            borderRadius: "10px",

            // opacity: showFilter ? "1" : "0",
          }}
        >
          <p className="categories">CATEGORIES</p>
          <div className="categories-sub">
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"phones, tablet,"} />
              </p>
              <p className="checkbox-text">Communication devices</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"phones, tablet,"} />
              </p>
              <p className="checkbox-text">Entertainment Gadgets</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"headphones"} />
              </p>
              <p className="checkbox-text">Audio Gadgets</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"headphones"} />
              </p>
              <p className="checkbox-text">Charging Gadgets</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"headphones"} />
              </p>
              <p className="checkbox-text">Others</p>
            </div>
          </div>
          <p className="categories Types">TYPES</p>
          <div className="categories-sub">
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"Phones"} />
              </p>
              <p className="checkbox-text">Phones</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"tablet"} />
              </p>
              <p className="checkbox-text">Tablets</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"Laptops"} />
              </p>
              <p className="checkbox-text">Laptops</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"headphones"} />
              </p>
              <p className="checkbox-text">Headphones</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"Smart Tv"} />
              </p>
              <p className="checkbox-text">Smart Tv</p>
            </div>
            <div className="categories-sub-sub">
              <p>
                <input type="checkbox" value={"Others"} />
              </p>
              <p className="checkbox-text">Others</p>
            </div>
          </div>
        </div>
      </div>
      {/* the Right side */}
      <div className="total-right-collection">
        <div className="right-collection">
          <p className="filter">All PRODUCTS</p>
          <div className="Sorting-div">
            <label>Sort By:</label>
            <select>
              <option value="price">Prices</option>
              <option value="option2">Low to High</option>
              <option value="option2">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      {/* Maping the product */}
    </div>
  );
};

export default Collection;
