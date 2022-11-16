import React from "react";

import "./style.css";

import UnderConstraction from "../../Assets/img/under_construction.svg";

function ComingSoon() {
  return (
    <>
      <div className="coming-soon-wrapper">
        <div className="coming-soon-body">
          <img src={UnderConstraction} alt="" />
          <h1>My Website is Under Development</h1>
          <p>Coming Soon</p>
          <footer>
            <p>Made with ❤️ from Yogyakarta</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
