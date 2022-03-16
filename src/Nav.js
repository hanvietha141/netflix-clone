import React, { useEffect, useState } from "react";
import "./Nav.scss"

const Nav = () => {

  const [show, handleShow] = useState(false)

  useEffect( () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1024w.jpg?v=38"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
