import React from "react";

export default function List(props) {
  let className = ["list-reset"];
  className.push(props.className);
  if (props.isSmall) {
    className.push("text-xs");
  }
  return (
    <ul className={className.join(" ")}>
      {props.data.map((item, index) => {
        return (
          <li key={index} className={item.isChecked ? "is-checked" : ""}>
            {item.content}
          </li>
        );
      })}
    </ul>
  );
}
