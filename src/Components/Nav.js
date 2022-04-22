import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import avatar from "./profile__logo.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    // <div className="nav">
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netflix logo" />
      <img className="nav_avatar" src={avatar} alt="Avatar logo" />
    </div>
  );
}

export default Nav;
