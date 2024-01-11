import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sign() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Perform sign-in logic here
    navigate("/"); // Navigate to '/' upon sign-in
  };

  const handleSignUp = () => {
    // Perform sign-up logic here
    navigate("/cart", {
      replace: true,
      state: { name: name, password: password },
    }); // Navigate to '/' upon sign-up
  };

  return (
    <div>
      <input
        name="username"
        type="text"
        placeholder="Username"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <div>
        <button onClick={handleSignIn}>SignIn</button>
        <button onClick={handleSignUp}>signUp</button>
      </div>
    </div>
  );
}

export default Sign;
