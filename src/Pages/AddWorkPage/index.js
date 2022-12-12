import React from "react";

import AppBar from "../../Component/AppBar";
import NavbarDashboard from "../../Component/NavbarDashboard";

import "./style.css";

function AddWorkPage() {
  return (
    <div className="max-w-screen-sm">
      <AppBar title={"Add Work"} />
      <div className="main-page-wrapper">
        <div className="add-work">
          <h3>Add New Work</h3>
          <form>
            <div className="item-input">
              <h4>Title</h4>
              <input type="text" placeholder="Title" />
            </div>
            <div className="item-input">
              <h4>Short Desc</h4>
              <textarea type="text" />
            </div>
            <div className="item-input">
              <h4>Desc</h4>
              <textarea type="text" />
            </div>
            <div className="item-input">
              <h4>Platform</h4>
              <input type="text" placeholder="Platform" />
            </div>
            <div className="item-input">
              <h4>Stack</h4>
              <input type="text" placeholder="Stack" />
            </div>
            <div className="item-input">
              <h4>Source</h4>
              <input type="text" placeholder="Source" />
            </div>
            <div className="item-input">
              <h4>Cover</h4>
              <input type="file" id="cover" />
            </div>
            
          </form>
        </div>
      </div>
      <NavbarDashboard />
    </div>
  );
}

export default AddWorkPage;
