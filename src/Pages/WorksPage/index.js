import { React, useEffect, useState } from "react";

import Navbar from "../../Component/Navbar/Navbar";
import WorksCard from "../../Component/WorksCard";
import Footer from "../../Component/Footer";

import "./style.css";

function WorksPage() {

  return (
    <>
      <Navbar />
      <div className="home-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          deserunt dolorum facere.
        </p>
        <div className="works-section-wrapper">
          <h3 className="section-title">Portfolio</h3>
          <div className="list-works row">
            <WorksCard
              title="Wecan"
              description="Wecan is an Kitabisa.com clone app for assigment purpose"
            />
            <WorksCard
              title="Wecan"
              description="Wecan is an Kitabisa.com clone app for assigment purpose"
            />
            <WorksCard
              title="Wecan"
              description="Wecan is an Kitabisa.com clone app for assigment purpose"
            />
            <WorksCard
              title="Wecan"
              description="Wecan is an Kitabisa.com clone app for assigment purpose"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WorksPage;
