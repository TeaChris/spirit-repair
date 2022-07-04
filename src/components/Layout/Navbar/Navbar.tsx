import React from 'react';
import Icon from '../../SOAIcon/Icon';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light top-navbar">
      <div className="container">
        <Link className="navbar-brand mx-2" to="/">
          <Icon />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 ">
              <a className="nav-link " href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#explore">
                RoadMap
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            {/* <li className="nav-item mx-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li> */}
          </ul>
          {/* <div className="right mx-4">
            <Link className="pagebtn" to="/login">
              Login
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
