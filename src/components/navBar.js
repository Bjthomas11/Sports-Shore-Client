import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div id="topInfo">
        <Link to={"/"}>
          <div className="frontPageName">Sports Shore</div>
        </Link>

        <div id="buttons">
          <Link to={"/signup"}>
            <button id="signupButton" className="loginButton">
              Sign Up
            </button>
          </Link>

          <Link to={"/login"}>
            <button id="loginButton" className="loginButton">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
