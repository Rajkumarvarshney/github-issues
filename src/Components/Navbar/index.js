import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav_left">
        <span className="nav_circle"></span>
        <b>625 Open</b>
        <span className="nav_closed">✓ 10,104 Closed</span>
      </div>
      <div className="nav_right">
        <span>
          Author <i className="fa-solid fa-angle-down"></i>
        </span>
        <span>
          Label <i className="fa-solid fa-angle-down"></i>
        </span>
        <span className="remove">
          Projects <i className="fa-solid fa-angle-down"></i>
        </span>
        <span className="remove">
          Milestones <i className="fa-solid fa-angle-down"></i>
        </span>
        <span>
          Assignee <i className="fa-solid fa-angle-down"></i>
        </span>
        <span>
          Sort <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
