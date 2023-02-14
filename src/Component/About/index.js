import React from 'react';

import './style.css';

function About() {
  return (
    <div className="about-section">
      <h3 className="section-title">About</h3>
      <p>
        I am a student studying informatics at the University of Amikom
        Yogyakarta. I am a person with a strong personality and am capable of
        managing sensitive situations effectively. I am highly organized,
        self-motivated, and able to work well in a team. I have learned about
        web development since I was in junior high school and have completed
        several personal projects. I am now interested in learning more about
        Android technology, which is why I joined the{' '}
        <a className="link" href="https://grow.google/intl/id_id/bangkit/">
          Bangkit Academy 2022
        </a>
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
