import React from 'react';

import './style.css';

import { Link } from 'react-router-dom';

function WorksCard(props) {
  return (
    <div className="works-card-wrapper">
      <Link to={`/works/${props.title}`}>
        <img src={props.cover} alt="" />
      </Link>
      <Link to={`/works/${props.title}`}>
        <h3>{props.title}</h3>
      </Link>
      <p>{props.description}</p>
    </div>
  );
}

export default WorksCard;
