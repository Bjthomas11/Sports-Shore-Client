import React from "react";
import "./top-info.css";
import { Link } from "react-router-dom";

export default class TopInfo extends React.Component {
  render() {
    return (
      <div id="topInfo">
        <div id="logo">
          <Link to={"/"}>
            <div className="frontPageName">Sports Shore</div>
          </Link>
        </div>

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
