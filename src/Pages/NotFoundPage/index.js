import React from "react";

import NotFoundImage from "../../Assets/img/not_found.svg";
import Footer from "../../Component/Footer";

import "./style.css";

function NotFoundPage() {
  return (
    <div className="home-container">
      <div className="not-found-wrapper">
        <img src={NotFoundImage} alt="" />
        <h3>Sorry, page not found</h3>
        <p>The page you are looking for was not found</p>
        <div className="back-to-home">
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
