import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header ref={navRef}>
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="display-menu">
          <Link className="menu" to="/">
            Home
          </Link>
          <Link className="menu" to="/about">
            About
          </Link>
          <Link className="menu" to="/projects">
            Projects
          </Link>
          <Link className="menu" to="/projects">
            Projects
          </Link>
          <input type="text" placeholder="Search.." name='search'></input>
          <button type="submit">Submit</button>

          <button type="submit">Connect</button>

        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </header>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </>
  );
};

export default Navbar;
