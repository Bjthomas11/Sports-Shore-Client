import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./middleHeader.css";

export default class MiddleHeader extends Component {
  render() {
    return (
      <div id="middleInfo">
        <div id="middleContent">
          <p id="description">
            Want to know the latest news about your favorite sports teams? Here
            at Sports Shore we bring that idea to life!
          </p>
          <Link to={"/register"}>
            <button id="getStarted">Let's Go!</button>
          </Link>
        </div>
      </div>
    );
  }
}
