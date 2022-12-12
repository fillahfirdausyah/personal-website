import React from "react";

import "./style.css";

function WorksInfo(props) {
  return (
    <div className="works-info">
      <p>
        <span>{props.title}</span>{" "}
      </p>
      <p className="work-info-value">
        {props.title == "Source" ? (
          <a href={`https://${props.value}`}>{props.value}</a>
        ) : (
          props.value
        )}
      </p>
    </div>
  );
}

export default WorksInfo;
