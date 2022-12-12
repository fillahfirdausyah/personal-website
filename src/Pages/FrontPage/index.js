import React from "react";
import MyProfile from "../../Component/MyProfile";
import Navbar from "../../Component/Navbar/Navbar";
import profilePicture from "../../Assets/img/profilePicture.png";

import "./style.css";
import About from "../../Component/About";
import Bio from "../../Component/Bio";
import Hobbies from "../../Component/Hobbies";
import Contact from "../../Component/Contact";
import Footer from "../../Component/Footer";

function index() {
  return (
    <div className="max-w-screen-sm">
      <Navbar />
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
    </div>
  );
}

export default index;
