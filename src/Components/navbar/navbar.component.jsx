import React from "react";
import "./navbar.style.css";

import facebook from "../navbar/Navbar/fb.png";
import instagram from "../navbar/Navbar/insta.png";
import youtube from "../navbar/Navbar/YT.png";
import twitter from "../navbar/Navbar/twitter.png";
import { Link, animateScroll as scroll } from "react-scroll";
import icon from "../navbar/Navbar/badminton icon.png";
import dropbutton from "../navbar/Navbar/Hamburger menu.png";

function Navbar(props) {
  function Facebook() {
    window.open("https://www.facebook.com/", "_blank");
  }

  function Twitter() {
    window.open("https://twitter.com/", "_blank");
  }

  function Insta() {
    window.open("https://www.instagram.com/", "_blank");
  }

  function Youtube() {
    window.open("https://www.youtube.com/", "_blank");
  }

  return (
    <header>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="head">
        <div className="Logo">
          <h1 className="logo" onClick={() => scroll.scrollToTop()}>
            CBA
          </h1>
          <img className="logoicon" src={icon} alt="" />
        </div>
        <nav className="nav">
          <ul className="navbar">
            <li>
              <Link to="intro" spy={true} smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                offset={50}
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" smooth={true} duration={1000}>
                Admin
              </Link>
            </li>
          </ul>

          <ul className="icons">
            <li>
              <img
                className="social-media-icon"
                src={facebook}
                alt=""
                onClick={Facebook}
              />
            </li>
            <li>
              <img
                className="social-media-icon"
                src={instagram}
                alt=""
                onClick={Insta}
              />
            </li>
            <li>
              <img
                className="social-media-icon"
                src={youtube}
                alt=""
                onClick={Youtube}
              />
            </li>
            <li>
              <img
                className="social-media-icon"
                src={twitter}
                alt=""
                onClick={Twitter}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div class="dropdown">
        <img src={dropbutton} alt="" class="dropbtn" />
        <div class="dropdown-content">
          <Link to="intro" spy={true} smooth={true} duration={1000}>
            About
          </Link>
          <Link
            to="contact"
            offset={50}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
          <Link to="#" smooth={true} duration={1000}>
            Admin
          </Link>
        </div>
      </div>

      <div class="dropdown2">
        <button class="dropbtn2">Connect with Us</button>
        <div class="dropdown-content2">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
