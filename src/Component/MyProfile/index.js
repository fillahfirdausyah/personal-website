import React from "react";

import "./style.css";

function MyProfile(props) {
  return (
    <div className="my-profile-section">
      <img src={props.profilePict} alt="" />
      <div className="intro-section">
        <h4>Hello, I'am {props.fullName}</h4>
      </div>
      <div className="user-detail">
        <h3>{props.fullName}</h3>
        <p>Web & Android Developer</p>
      </div>
    </div>
  );
}

export default MyProfile;
