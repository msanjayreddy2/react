import React from "react";
import "./App.css";
function Button(props) {
  function HandleClick(event) {
    const buttonValue = event.target.value;
    props.func(buttonValue);
  }
  return (
    <button className="bt" value={props.value} onClick={HandleClick}>
      {props.value}
    </button>
  );
}
export default Button;
