import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="container-fluid navbar-list p-0 ">
        <li>
          <Link to="/# " className="item">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="item">
            <h5 className="mt-3">Dashboard</h5>
          </Link>
        </li>
        <li>
          <Link to="/about" className="item">
            <h5 className="mt-3">About</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
