import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    this.handleClick = () => {
      localStorage.clear();
      window.location = "/login";
    };

    return (
      <div id="header">
        <div id="logoHeader">
          <div id="mainLogoName">Sports Shore</div>
        </div>

        <Link to={"/main"}>
          <button id="logoutButton" onClick={this.handleClick}>
            Logout
          </button>
        </Link>
      </div>
    );
  }
}
