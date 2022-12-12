import React from "react";

import "./style.css";

function WorksInfo(props) {
  return (
    <div className="works-info">
      <p>
        <span>{props.title}</span>{" "}
        {props.title == "Source" ? <a href="">{props.value}</a> : props.value}
      </p>
    </div>
  );
}

export default WorksInfo;
