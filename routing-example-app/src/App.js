import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import DashBoard from "./DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <center>
      <h1>hi welcome to our website</h1>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/dashboard/:name" exact Component={DashBoard} />
        </Routes>
      </BrowserRouter>
    </center>
  );
}

export default App;
