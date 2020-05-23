import React from "react";

export default function Button(props) {
  let className = ["button btn btn-primary  button-wide-mobile button-sm "];
  if (props.isPrimary) {
    className.push("button-primary");
  }
  if (props.isBlock) {
    className.push(" button-block");
  }
  // return <button className={`button ${className}`}>Sign Up</button>;
  return <button className={className.join(" ")}>{props.children}</button>;
}
