import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  UserCircle,
  Heart,
  House,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchterm, setsearchterm] = useState("");
  const navigate = useNavigate();
  function handlechange(e) {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
  }
  return (
    <nav>
      <ul className="Navbar-items">
        <li>
          <Link to="/" className="items">
            <House size={52} />
          </Link>
        </li>
        <li className="nav-search">
          <form onSubmit={handlechange}>
            <input
              type="text"
              onChange={(e) => setsearchterm(e.target.value)}
              placeholder="SearchProducts"
            ></input>
            <button>
              <MagnifyingGlass size={24} color="white" />
            </button>
          </form>
        </li>

        <div className="cart-loco">
          <div>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/wishlist" className="items">
                <Heart size={32} color="hotpink">
                  ZipStore
                </Heart>
              </Link>
            </li>
          </div>
          <div>
            <h1 style={{ color: "white", marginLeft: "15px" }}>|</h1>
          </div>
          <div>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/profile" className="items">
                <UserCircle size={32} />
              </Link>
            </li>
          </div>
          <div>
            <h1 style={{ color: "white", marginLeft: "15px" }}>|</h1>
          </div>
          <div>
            <li style={{ marginBottom: "10px", marginRight: "15px" }}>
              <Link to="/cart" className="items mt-4">
                <ShoppingCart
                  size={32}
                  color="white"
                  weight="fill"
                  className="mt-10"
                />
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
