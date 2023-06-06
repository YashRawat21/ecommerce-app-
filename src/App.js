import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product";
import WishList from "./pages/WishList/WishList";
import Loader from "./components/Loader/Loader";
import "./app.css"
import Cart from "./pages/Cart/Cart";

import { useState, useEffect } from "react"
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Mockman from 'mockman-js';
import { PrivateRoutes } from "./routes/PrivateRoutes";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import { Order } from "./pages/Order/Order";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {
        loading ?
          <Loader />
          :
          <>
            <Navbar />

            <Routes>
              <Route path="/mockman" element={<Mockman />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              } />
              <Route path="/wishList" element={<PrivateRoutes>
                <WishList />
              </PrivateRoutes>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element = {<Checkout/>} />
              <Route path="/profile" element = {<Profile />} />
              <Route path = "/order" element = {<Order />} />
            </Routes>

            <Footer />
          </>
      }

    </div>
  );


}

export default App;

