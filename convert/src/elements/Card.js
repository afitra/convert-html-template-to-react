import React from "react";

export default function Card(props) {
  let className = ["tiles-item"];
  className.push(props.className);
  let flag = false;
  function gerak(data, e) {
    flag = true;
    console.log("OKOKOKOK", flag, "<<<<<<<<", props.index);
    console.log("OKOKOKOK", flag, "<<<<<<<<", props.index);
  }
  function gakjadi(data, e) {
    flag = false;
    console.log("gak jadi deh    >>xxx>>>", flag, ">>>", props.index);
  }
  return (
    <div
      className={className.join(" ")}
      onMouseOver={gerak}
      onMouseOut={gakjadi}
    >
      <div
        className={`tiles-item-inner ${props.hasShadow ? "has-shadow" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
}
