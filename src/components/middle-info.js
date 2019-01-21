import React from "react";
import { Link } from "react-router-dom";
import "./middle-info.css";

export default class MiddleInfo extends React.Component {
  render() {
    return (
      <div id="middleInfo">
        <div id="middleContent">
          <p id="descrition">
            Want to know the latest news about your favorite sports teams? Here
            at Sports Shore we bring that idea to life!
          </p>
          <Link to={"/signup"}>
            <button id="getStarted">Get Started</button>
          </Link>
        </div>
      </div>
    );
  }
}
