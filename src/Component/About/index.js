import React from "react";

import "./style.css";

function About() {
  return (
    <div className="about-section">
      <h3 className="section-title">About</h3>
      <p>
        I am a student majoring in informatics at university of amikom
        yogyakarta, and I am a person with personality, and proficient in
        managing sensitive situations. Highly organized, self motivated, and
        also able to work in a team. I have strong knowledge of Web Development
        with 5 years experience, my area of expertise is in Backend development
        process. And now, I am interested in Android Technology so I joined{" "}
        <a className="link" href="https://grow.google/intl/id_id/bangkit/">
          Bangkit Academy 2022
        </a>{" "}
        to know more and learn about Android Technology.
      </p>
      <div className="to-myportfolio">
        <a href="/works" className="btn btn-primary btn-tomyportfolio">
          My Portfolio
        </a>
      </div>
    </div>
  );
}

export default About;
