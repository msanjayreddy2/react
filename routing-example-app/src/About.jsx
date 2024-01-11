import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  //   const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>signIn</button>
    </div>
  );
};

export default About;
