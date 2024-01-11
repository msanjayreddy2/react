// import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Wishlist({ cart, setcart, wishlist, setwishlist }) {
  const navigate = useNavigate();

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
  function HandleClickdelete(id, cat) {
    console.log(id, cat);
    const filtered = wishlist.filter(
      (product) => !(product.id === id && product.cat === cat)
    );
    console.log(filtered);
    setwishlist(filtered);
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
      {wishlist.length !== 0 ? (
        <center className="product row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2">
          {wishlist.map((products) => {
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
                    onClick={() => HandleClickdelete(products.id, products.cat)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </center>
      ) : (
        <center>
          <div>
            <h1>Your wishlist is empty</h1>
            {console.log(wishlist, "hi")}
          </div>
          <div>
            <Link to={"/"}>
              <h1>shop now</h1>
            </Link>
          </div>
        </center>
      )}
    </div>
  );
}

export default Wishlist;
