import { CiSearch } from "react-icons/ci";
import { ShopContext } from "../context/ShopContext";
import "./../Styles/collection.css";
import { RxCross1 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="search-bar">
      <div className="search-bar-sub">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Product..."
          className="search-input"
        />
        <CiSearch className="search-img" />
      </div>
      <RxCross1 onClick={() => setShowSearch(false)} className="cancel-img" />
    </div>
  ) : null;
};

export default SearchBar;
