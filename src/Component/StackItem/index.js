import React from "react";

import "./style.css";

function StackItem(props) {
  return (
    <div className={props.className}>
      <img src={props.icon} alt="" />
      <h4>{props.title}</h4>
    </div>
  );
}

export default StackItem;
