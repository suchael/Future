import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Placeorder from "./pages/Placeorder";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import OurPolicy from "./components/OurPolicy";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Placeorder" element={<Placeorder />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
      <OurPolicy />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default App;
