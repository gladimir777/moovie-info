import React from "react";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <nav className="nav-wraper">
      <ul className="nav-container">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">genres</a>
        </li>
        <li>
          <a href="#">tv-series</a>
        </li>
        <li>
          <a href="">news</a>
        </li>
        <li>
          <a href="#">country</a>
        </li>
        <li>
          <a href="#">short-codes</a>
        </li>
        <li>
          <a href="#">a-z list</a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
