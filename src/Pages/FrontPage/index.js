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
    <>
      <Navbar />
      <div className="home-container">
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
    </>
  );
}

export default index;
