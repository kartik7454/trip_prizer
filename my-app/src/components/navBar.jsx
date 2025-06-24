import React from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          <span className="logo-blue">TRIP</span>
          <span className="logo-grey">PRIZER</span>
          <span className="logo-light">.com</span>
        </h1>
        <ul className="nav-links">
          <li>
            <span role="img" aria-label="flight">✈️</span> FLIGHTS
          </li>
          <li>
            <span role="img" aria-label="hotel">🏨</span> HOTELS
          </li>
          <li>
            <span role="img" aria-label="package">🏰</span> PACKAGES
          </li>
        </ul>
      </div>
      <button className="login-btn">Login / Signup</button>
    </nav>
  );
};
