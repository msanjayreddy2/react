import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import { Laptopsdata } from "./Laptopsdata";
import Profile from "./Profile";
import Wishlist from "./Wishlist";
import "./App.css";
import ProductDetails from "./productdetails";
import { exp } from "./exp";

import Sign from "./Signin";
import Products from "./Products";
import Searchitems from "./Searchitems";
function App() {
  const [data, setdata] = useState([...Laptopsdata]);
  const [cart, setcart] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  // console.log(cart);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setcart={setcart} />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/wishlist"
            element={
              <Wishlist
                cart={cart}
                setcart={setcart}
                wishlist={wishlist}
                setwishlist={setwishlist}
              />
            }
          ></Route>
          <Route
            path="/:cat"
            element={
              <Products
                products={data}
                cart={cart}
                setcart={setcart}
                wishlist={wishlist}
                setwishlist={setwishlist}
              />
            }
          ></Route>
          <Route
            path="/:cat/:id"
            element={
              <ProductDetails
                cart={cart}
                setcart={setcart}
                wishlist={wishlist}
                setwishlist={setwishlist}
              />
            }
          />
          <Route
            path="/search/:term"
            element={
              <Searchitems
                cart={cart}
                setcart={setcart}
                wishlist={wishlist}
                setwishlist={setwishlist}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
