import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? <div className="search-bar"></div> : null;
};

export default SearchBar;
