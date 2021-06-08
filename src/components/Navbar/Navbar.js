import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav id="navbar">
          <div className="navbar-brand">
            <h2 className="navbar-item"><a href="#Home"><span>aqib</span> rafiq</a></h2>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">

              <a href="#Home" className="navbar-item">Home</a>
              <a href="#Project" className="navbar-item">Project </a>
              <a href='#About' className="navbar-item">About</a>
              <a href='#Skills' className="navbar-item">Skills</a>
              <a href="#Contact" className="navbar-item">Contact Me</a>

            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;