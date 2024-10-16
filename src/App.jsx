import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Placeorder from "./pages/Placeorder";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Tcollection from "./pages/Tcollection";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Tcollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Place-order" element={<Placeorder />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
