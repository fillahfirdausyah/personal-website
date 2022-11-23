import React from "react";

import Wecan from "../../Assets/works/wecan.png";

import "./style.css";

function WorksCard(props) {
  return (
    <div className="works-card-wrapper">
      <a href="">
        <img src={props.cover} alt="" />
      </a>
      <a href="">
        <h3>{props.title}</h3>
      </a>
      <p>{props.description}</p>
    </div>
  );
}

export default WorksCard;
