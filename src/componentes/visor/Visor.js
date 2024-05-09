import React from "react";
import "./Visor.css";

export default function Visor(props) {
  return (
    <React.Fragment>
      <h3 className={`parcialCss ${props.erro ? "error" : ""}`}>{props.parcial}</h3>
          <h1 className={`resultado ${props ? "error" : ""}`}>
            {props.num.toString().replace(".", ",")}
          </h1>
    </React.Fragment>
  );
}