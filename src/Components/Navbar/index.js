import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="mainn">
      <div className="first">
        <div
          style={{
            border: "solid",
            borderColor: "black",
            borderRadius: 10,
            height: 5,
            width: 5,
            marginRight: 10,
          }}
        ></div>
        <span style={{ marginRight: 10, fontSize: 12 }}>625 Open</span>
        <span style={{ fontSize: 12 }}>✓ 10,104 Closed</span>
      </div>
      <div className="sec">
        <div>Author</div>
        <div style={{ marginLeft: 25, marginRight: 25 }}>labels</div>
        <div>Projects</div>
        <div style={{ marginLeft: 25, marginRight: 25 }}>Assignee</div>
        <div> Milestone</div>
        <div style={{ marginLeft: 25, marginRight: 25 }}>Sort</div>
      </div>
    </div>
  );
}

export default Navbar;
