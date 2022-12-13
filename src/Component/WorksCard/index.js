import React from "react";

import "./style.css";

function WorksCard(props) {
  return (
    <div className="works-card-wrapper"> 
      <a href={`/works/${props.title}`}>
        <img src={props.cover} alt="" />
      </a>
      <a href={`/works/${props.title}`}>
        <h3>{props.title}</h3>
      </a>
      <p>{props.description}</p>
    </div>
  );
}

export default WorksCard;
