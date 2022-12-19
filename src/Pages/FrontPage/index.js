import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

import profilePicture from "../../Assets/img/profilePicture.png";

// Component
import Navbar from "../../Component/Navbar/Navbar";
import MyProfile from "../../Component/MyProfile";
import About from "../../Component/About";
import Bio from "../../Component/Bio";
import Hobbies from "../../Component/Hobbies";
import Contact from "../../Component/Contact";
import Footer from "../../Component/Footer";

import "./style.css";

function index() {
  return (
    <div className="max-w-screen-sm">
      <Navbar />
      <FadeIn>
        <div className="main-page-wrapper">
          <MyProfile
            profilePict={profilePicture}
            fullName="Fillah Akbar Firdausyah"
          />
          <About />
          <Bio />
          <Hobbies />
          <Contact />
          <Footer />
        </div>
      </FadeIn>
    </div>
  );
}

export default index;
