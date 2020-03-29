import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

function Header(props) {
  return (
    <div className="top-header">
      <div className="logo">SquareSpace</div>
      <div className="title">
        <div>Sponsored by SquareSpace</div>
        <div> Get a domain and create a web site with SquareSpace</div>
      </div>
      <div className="trial">
        <button className="btn-start">Start a free trial</button>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
