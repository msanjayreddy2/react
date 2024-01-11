import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowFatLineRight } from "@phosphor-icons/react";

function Home() {
  const navigate = useNavigate();
  return (
    <div className=" container text-center ">
      <h1>Categories</h1>
      <div className="home row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2">
        <div
          className="home-cmp col m-10"
          style={{ width: "25rem", height: "23rem" }}
        >
          <img src="./laptop.jpeg" className="card-img-top" alt="laptops" />
          <div className="card-body" style={{ backgroundColor: "cadetblue" }}>
            <h5 className="card-title">Laptops</h5>
            <button
              className="btn btn-secondary m-3"
              onClick={() => navigate("/laptops")}
            >
              <ArrowFatLineRight size={32} />
            </button>
          </div>
        </div>
        <div
          className="home-cmp col m-10"
          style={{ width: "25rem", height: "23rem" }}
        >
          <img src="./laptop.jpeg" className="card-img-top" alt="mobiles" />
          <div className="card-body" style={{ backgroundColor: "cadetblue" }}>
            <h5 className="card-title">Mobiles</h5>
            <button
              className="btn btn-secondary m-3"
              onClick={() => navigate("/mobiles")}
            >
              <ArrowFatLineRight size={32} />
            </button>
          </div>
        </div>
        <div
          className="home-cmp col m-10"
          style={{ width: "25rem", height: "23rem" }}
        >
          <img src="./laptop.jpeg" className="card-img-top" alt="tablets" />
          <div className="card-body" style={{ backgroundColor: "cadetblue" }}>
            <h5 className="card-title">Tablets</h5>

            <button
              className="btn btn-secondary m-3"
              onClick={() => navigate("/tablets")}
            >
              <ArrowFatLineRight size={32} />
            </button>
          </div>
        </div>
        <div
          className="home-cmp col m-10"
          style={{ width: "25rem", height: "23rem" }}
        >
          <img src="./laptop.jpeg" className="card-img-top" alt="tablets" />
          <div className="card-body" style={{ backgroundColor: "cadetblue" }}>
            <h5 className="card-title">PC</h5>
            <a href="#" className="btn btn-secondary m-3">
              <ArrowFatLineRight size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
