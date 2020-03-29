import React from "react";
import PropTypes from "prop-types";
import "./subHeader.scss";

function Header(props) {
  return (
    <div className="header-wraper">
      <div className="header-container">
        <div className="logo"></div>
        <div className="form-wraper">
          <div className="form-container">
            <input type="text" />
            <button className="btn">GO</button>
          </div>
        </div>
        <div className="login-container">
          <div className="phone"> (+000) 123 345 653</div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
