import React, { useState, useEffect } from "react";
import {
  createRoutesFromChildren,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import { Laptopsdata } from "./Laptopsdata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ cart, setcart, wishlist, setwishlist }) => {
  const { id, cat } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  var getbrand = "";
  for (var item in Laptopsdata) {
    if (Laptopsdata[item].id == id && Laptopsdata[item].cat == cat) {
      getbrand = Laptopsdata[item].brand;
      break;
    }
  }
  const filterbycat = Laptopsdata.filter((product) => {
    return product.cat == cat;
  });
  console.log(filterbycat);
  const filterbybrand = Laptopsdata.filter((product) => {
    return product.brand == getbrand;
  });
  console.log(filterbybrand);

  useEffect(() => {
    const [filtered] = Laptopsdata.filter(
      (pro) => pro.id == id && pro.cat == cat
    );
    setDetails(filtered);
  }, [id, cat]);
  function HandleClick(id, name, price, cat, brand, imageUrl) {
    var b = false;
    // console.log(cart);
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
    <div>
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
      {details && (
        <div
          className="product-details row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2"
          style={{ border: "black" }}
        >
          <div className="col" style={{ height: "225px", border: "2px" }}>
            <img
              src={details.imageUrl}
              className="card-img-top"
              alt="laptops"
              style={{
                height: "230px",
                width: "300px",
                margin: "5px",
                borderRadius: "5%",
              }}
            />
          </div>
          <div className="specs col mt-10" style={{ alignItems: "end" }}>
            <h5 className="mt-10">{details.name}</h5>
            <p>
              <b>
                brand:
                {details.brand}
              </b>
            </p>
            <p>
              <b>
                storage:
                {details.ram}/{details.storageCapacity}
              </b>
            </p>
            <p>
              <b>
                price:$
                {details.price}
              </b>
            </p>
            <div>
              <button
                className="btn btn-primary m-2"
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
              <button
                className="btn btn-primary m-3"
                onClick={() =>
                  HandleClick(
                    details.id,
                    details.name,
                    details.price,
                    details.cat,
                    details.brand,
                    details.imageUrl
                  )
                }
              >
                AddtoCart
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <center>
          <h1>shop by :{cat}</h1>
        </center>
        <center className="relatedbycat ">
          {filterbycat.map((products) => {
            return (
              <div
                className="relatedbycatsub cards"
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
                    onClick={() => navigate(`/${products.cat}/${products.id}`)}
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
        </center>
        <center>
          <h1>Shop by: {getbrand}</h1>
        </center>
        <center className="relatedbycat ">
          {filterbybrand.map((products) => {
            return (
              <div
                className="relatedbycatsub cards"
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
                    onClick={() => navigate(`/${products.cat}/${products.id}`)}
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
        </center>
      </div>
    </div>
  );
};

export default ProductDetails;
