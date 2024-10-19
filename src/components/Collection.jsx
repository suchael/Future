import { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import "./../Styles/collection.css";
import { RxDropdownMenu } from "react-icons/rx";
import ProductItem from "./ProductItem.jsx";

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  const toggleCategory = (e) => {
    const { value } = e.target;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (search.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }

    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [category, sortOrder, products, search]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [products]);
  useEffect(() => {
    const savedSortOrder = localStorage.getItem("sortOrder");
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
    }
  }, []);

  return (
    <div className="collection">
      {isLoading ? (
        <div className="loader">Loading...</div> // Add some styling for loader
      ) : (
        <>
          <div className="Filter-options">
            <p className="filter" onClick={() => setShowFilter(!showFilter)}>
              FILTER
              <RxDropdownMenu
                className={`filter-img ${showFilter ? "rotate-90 " : ""}`}
              />
            </p>
            <div
              className={`filter-box ${showFilter ? "" : "hidden"}`}
              style={{
                border: "1px solid #fff",
                margin: "2rem 0",
                padding: "1rem 2rem",
                color: "#000",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderRadius: "10px",
                zIndex: "9999",
              }}
            >
              <p className="categories">CATEGORIES</p>
              <div className="categories-sub">
                {/* Communication Devices */}
                <div className="categories-sub-sub">
                  <p>
                    <input
                      className="collection-input"
                      type="checkbox"
                      value="Communication devices"
                      onChange={toggleCategory}
                    />
                  </p>
                  <p className="checkbox-text">Communication devices</p>
                </div>
                {/* Entertainment Gadgets */}
                <div className="categories-sub-sub">
                  <p>
                    <input
                      type="checkbox"
                      value="Entertainment Gadgets"
                      onChange={toggleCategory}
                    />
                  </p>
                  <p className="checkbox-text">Entertainment Gadgets</p>
                </div>
                {/* Audio Gadgets */}
                <div className="categories-sub-sub">
                  <p>
                    <input
                      type="checkbox"
                      value="Audio Gadgets"
                      onChange={toggleCategory}
                    />
                  </p>
                  <p className="checkbox-text">Audio Gadgets</p>
                </div>
                {/* Charging Gadgets */}
                <div className="categories-sub-sub">
                  <p>
                    <input
                      type="checkbox"
                      value="Charging Gadgets"
                      onChange={toggleCategory}
                    />
                  </p>
                  <p className="checkbox-text">Charging Gadgets</p>
                </div>
                {/* Others */}
                <div className="categories-sub-sub">
                  <p>
                    <input
                      type="checkbox"
                      value="Others"
                      onChange={toggleCategory}
                    />
                  </p>
                  <p className="checkbox-text">Others</p>
                </div>
                {/* Add other categories similarly */}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="total-right-collection">
            <div className="right-collection">
              <p className="filter">All PRODUCTS</p>
              <div className="Sorting-div">
                <label>Sort By:</label>
                <select onChange={handleSortChange} value={sortOrder}>
                  <option value="default">Default</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </div>
            </div>

            {/* Display filtered and sorted products */}
            <div className="render-product collection-products">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <ProductItem
                    key={index}
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                  />
                ))
              ) : (
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "100",
                  }}
                >
                  Ooops no products found.....
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Collection;
