import React from "react";
import {  Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Imagine-AI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div style={{justifyContent: 'end'}} className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link style={{color:'#FEF4E4'}} className="nav-link" aria-current="page" to="/genimg">
                Generate IMG
              </Link>
              <Link style={{color:'#FEF4E4'}} className="nav-link" to="/">
                About
              </Link>
              <Link style={{color:'#FEF4E4'}} className="nav-link" to="/">
                Leap-AI
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
