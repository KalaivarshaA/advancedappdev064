import { convertLength } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import "./navbar.css";
import image1 from "./image1.avif";
import image2 from "./image2.avif";
import image3 from "./image3.avif";


function Landingpage() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div>
    <nav className="nav">
      <a href="#" className="nav__brand">
        ZenNest
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>
    </nav>
    <div className="center-content">
        <h1>
          <center>
            <br></br>Where Comfort Meets Care.<br></br>Your home, our commitment.
          </center>
        </h1>
        {/* <img src={image1} alt="Image 1" className="center-image" /> */}
        <button className="center-button">Schedule a Free Consultation</button>
        {/* Uncomment the line below if you want to display an image */}
        {/* <img src={image1} alt="Image 1" className="center-image" /> */}
      </div>
      <div className="image-gallery">
          <img src={image1} alt="Gallery Image 1" />
          <img src={image2} alt="Gallery Image 2" />
          <img src={image3} alt="Gallery Image 3" />
          {/* Add more images as needed */}
        </div>
      </div>
  );
}

export default Landingpage;