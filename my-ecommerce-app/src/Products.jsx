import React, { useState, useEffect } from "react";
import { Laptopsdata } from "./Laptopsdata";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ArrowFatLineRight } from "@phosphor-icons/react";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ products, cart, setcart, wishlist, setwishlist }) => {
  const navigate = useNavigate();
  const { cat } = useParams();
  // const [products, setProducts] = useState(Laptopsdata);
  const filtered = products.filter((product) => product.cat === cat);
  function HandleClick(id, name, price, cat, brand, imageUrl) {
    var b = false;
    console.log(cart);
    cart.forEach((item) => {
      if (item.id === id && item.name === name && item.cat === cat) {
        item.cnt += 1;
        item.amount += price;
        b = true;
      }
    });

    console.log(cart);
    if (!b) {
      const obj = {
        id: id,
        name: name,
        price: price,
        cat: cat,
        brand: brand,
        imageUrl: imageUrl,
        cnt: 1,
        amount: price,
      };
      setcart([...cart, obj]);
    }

    toast.success("Added to Cart,successfully!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function HandleClickWish(id, name, price, cat, brand, imageUrl) {
    const obj = {
      id: id,
      name: name,
      price: price,
      cat: cat,
      brand: brand,
      imageUrl: imageUrl,
    };
    var b = true;
    console.log(wishlist);
    for (var item of wishlist) {
      console.log(item.id, item.cat);
      if (item.id == id && item.cat == cat) {
        b = false;
        console.log(item);
        break;
      }
    }
    if (b) {
      setwishlist([...wishlist, obj]);
      toast.success("Added to wishlist,successfully!", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <center>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" product row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2">
        {filtered.map((products) => {
          return (
            <div
              className="col cards"
              key={products.id}
              style={{ height: "365px", border: "2px" }}
            >
              <Link to={`./${products.id}`}>
                <img
                  src={products.imageUrl}
                  className="card-img-top"
                  alt="laptops"
                  style={{
                    height: "60%",
                    width: "80%",
                    margin: "5px",
                    borderRadius: "5%",
                  }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <button
                  className="btn btn-warning m-2"
                  onClick={() => navigate(`./${products.id}`)}
                >
                  Details
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() =>
                    HandleClick(
                      products.id,
                      products.name,
                      products.price,
                      products.cat,
                      products.brand,
                      products.imageUrl
                    )
                  }
                >
                  AddCart
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() =>
                    HandleClickWish(
                      products.id,
                      products.name,
                      products.price,
                      products.cat,
                      products.brand,
                      products.imageUrl
                    )
                  }
                >
                  Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </center>
  );
};

export default Products;
