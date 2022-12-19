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
          <div className="history-detail">
            <p className="history-main">Graduate from SMK N 2 Bitung</p>
            <p className="history-role">(Computer and Network Engineering)</p>
          </div>
        </div>
        <div className="bio-history">
          <span className="history-year">2020</span>
          <div className="history-detail">
            <p className="history-main">Worked at PT.Buana Lintas Media</p>
            <p className="history-role">(Web Developer)</p>
          </div>
        </div>
        <div className="bio-history">
          <span className="history-year">2022</span>
          <div className="history-detail">
            <p className="history-main">Graduate From Bangkit Academy 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
