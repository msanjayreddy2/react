import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";

function Cart({ cart, setcart }) {
  const [change, setChange] = useState(false);
  const [amt, setAmt] = useState(0);
  function handleClickNeg(product) {
    if (product.cnt > 1) {
      product.cnt -= 1;
      product.amount -= product.price;
      setcart([...cart]);
    } else {
      const filter = cart.filter(
        (products) =>
          !(product.id == products.id && product.cat == products.cat)
      );
      setcart(filter);
    }
    setAmt(amt - product.price);
  }

  function handleClickPos(product) {
    product.cnt += 1;
    product.amount += product.price;
    setcart([...cart]);
    setAmt(amt + product.price);
  }
  function HandleClickDelete(product) {
    const filter = cart.filter(
      (products) => !(product.id == products.id && product.cat == products.cat)
    );
    setcart(filter);
    setAmt(amt - product.amount);
  }
  useEffect(() => {
    var tmp = 0;
    cart.map((product) => {
      tmp += product.amount;
    });
    setAmt(amt + tmp);
  }, []);
  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          <center>
            <h1> Cart Items</h1>
          </center>
          {cart.map((product, index) => (
            <div key={index} className="cart-details row">
              <div className="col">
                <button onClick={() => HandleClickDelete(product)}>
                  <X size={55} />
                </button>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt="laptops"
                  style={{
                    height: "110px",
                    width: "150px",
                    margin: "5px",
                    borderRadius: "5%",
                  }}
                ></img>
              </div>
              <div className="col">
                <button
                  className="btn "
                  onClick={() => handleClickNeg(product)}
                >
                  -
                </button>
                <button className="btn m-2">{product.cnt}</button>
                <button
                  className="btn "
                  onClick={() => handleClickPos(product)}
                >
                  +
                </button>
              </div>
              <div className=" col">
                <h4>{product.name}</h4>
                <h5>brand:{product.brand}</h5>
                <h5>${product.amount}</h5>
              </div>
            </div>
          ))}
          <center>
            <h1>TotalAmount:${amt}</h1>
            <button>CheckOut</button>
          </center>
        </div>
      ) : (
        <center>
          <h1>Your cart is Empty</h1>
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

export default Cart;

// import React, { useState, useEffect } from "react";

// function Cart({ cart, setCart }) {
//   const [change, setChange] = useState(false);
//   const [amt, setamt] = useState(0);

//   return (
//     <center>
//       {(cart.length !== 0) !== 0 ? (
//         <div>
//           {cart.map((product, index) => {
//             return (
//               <div key={index}>
//                 <h3>{product.name}</h3>
//                 <p>Price: ${product.price}</p>
//                 {/* Other product details */}
//                 <p>Amount:${product.amount}</p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <h1>your cart is Empty</h1>
//       )}
//     </center>
//   );
// }
// export default Cart;
