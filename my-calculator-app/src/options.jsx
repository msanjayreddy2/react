import React, { useState } from "react";
import Button from "./Button";
function Options() {
  const bt = [
    "x^2",
    "%",
    "C",
    "Del",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "~",
    "0",
    ".",
    "=",
  ];
  const [exp, setexp] = useState("");
  const [ans, setans] = useState(0);
  function Addstr(s) {
    if (s === "C") {
      setans(0);
      setexp("");
    } else if (s === "Del") {
      setexp(exp.slice(0, -1));
    } else if (s === "*" || s === "/" || s === "+" || s === "-") {
      const ch = exp[exp.length - 1];
      if (ch === "*" || ch === "/" || ch === "+" || ch === "-") {
        setexp(exp.slice(0, -1) + s);
      } else {
        setexp(exp + s);
      }
    } else if (s === "=") {
      const ch = exp[exp.length - 1];
      if (ch === "*" || ch === "/" || ch === "+" || ch === "-") {
        window.alert("enter valid exp");
      } else {
        const e = eval(exp);
        setans(e);
        setexp(e.toString());
      }
      // } else if (s === "+/-") {
      //   setans(-1 * ans);
      // } else if (s === "x^2") {
      //   setans(ans * ans);
    } else {
      setexp(exp + s);
    }
  }

  return (
    <center className="main">
      <div className="inner">
        <div className="result">
          <div className="resbox">
            <div>{exp}</div>
            <div>{ans}</div>
          </div>
        </div>
        <br />
        <div className="btns">
          {bt.map((ele, indx) => {
            return <Button key={indx} value={ele} func={Addstr} />;
          })}
        </div>
      </div>
    </center>
  );
}
export default Options;
