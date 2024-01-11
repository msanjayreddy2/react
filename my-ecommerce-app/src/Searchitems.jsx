import React, { useState, useEffect } from "react";
import { Laptopsdata } from "./Laptopsdata";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Searchitems = ({ cart, setcart, wishlist, setwishlist }) => {
  const { term } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const filtered = Laptopsdata.filter(
      (pro) =>
        pro.cat.toLowerCase() == term.toLowerCase() ||
        pro.brand.toLowerCase() == term.toLowerCase() ||
        pro.name.toLowerCase() == term.toLowerCase()
    );
    setDetails(filtered);
  }, [term]);
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
  function HandleClick1(id, name, price, cat, brand, imageUrl) {
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
      {/* Same as */}
      <ToastContainer />
      <div className=" product row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2">
        {details.map((products) => {
          return (
            <div
              className="col cards"
              key={products.id}
              style={{ height: "365px", border: "2px" }}
            >
              <Link to={`/${products.cat}/${products.id}`}>
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
                  onClick={() =>
                    navigate(`/${products.cat}/${products.id}`, {
                      replace: true,
                    })
                  }
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
                    HandleClick1(
                      details.id,
                      details.name,
                      details.price,
                      details.cat,
                      details.brand,
                      details.imageUrl
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

export default Searchitems;
