import React from "react";

import "./style.css";

function Bio() {
  return (
    <div className="bio-section">
      <h3 className="section-title">Bio</h3>
      <div className="bio-history-wrapper">
        <div className="bio-history">
          <span className="history-year">2000</span>
          Born in Bitung, North Sulawesi, Indonesia
        </div>
        <div className="bio-history">
          <span className="history-year">2019</span>
          Graduate from SMK N 2 Bitung (Computer and Network Engineering)
        </div>
        <div className="bio-history">
          <span className="history-year">2020</span>
          Worked at PT.Buana Lintas Media (Fullstack Developer)
        </div>
        <div className="bio-history">
          <span className="history-year">2022</span>
          Graduate From Bangkit Academy 2022
        </div>
      </div>
    </div>
  );
}

export default Bio;
