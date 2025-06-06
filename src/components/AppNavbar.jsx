import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <>
      <div className="appNavbarContainer">
        <Link className="navLinks" to="/">
          <i className="fa-solid fa-tree navLogo"></i>
          Pines
        </Link>
        <div>
          <Link className="navLinks" to="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
}
