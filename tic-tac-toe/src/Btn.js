import React from "react";

function Btn(props) {
  const handleClick = () => {
    props.func(props.indx);
  };

  return (
    <button
      className="button"
      type="button"
      onClick={handleClick}
      value={props.indx}
    >
      {/* {props.value[props.indx]} */}
      {props.value}
    </button>
  );
}

export default Btn;
