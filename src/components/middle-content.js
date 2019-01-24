import React from "react";
import { Link } from "react-router-dom";
import teamList from "./teamList";
import "./middle-content.css";

export default class MiddleContent extends React.Component {
  render() {
    console.log(teamList);

    return (
      <div id="middleDisplay">
        <h2 id="middleDescription">
          As you've picked your favorite teams, current sports news will show up
          based on the teams you've selected!
        </h2>
        <div id="exampleTeamList" className="teamExContainer">
          <li className="teamEx grid-item">
            <img
              src={teamList.NBA[1].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
          <li className="teamEx grid-item">
            <img
              src={teamList.MLB[16].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
          <li className="teamEx grid-item">
            <img
              src={teamList.NFL[17].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
          <li className="teamEx grid-item">
            <img
              src={teamList.NBA[9].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
          <li className="teamEx grid-item">
            <img
              src={teamList.MLB[4].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
          <li className="teamEx grid-item">
            <img
              src={teamList.NFL[24].logo}
              className="teamIconList"
              alt="team logos"
            />
          </li>
        </div>
        <Link to={"/signup"}>
          <button id="getStarted">Get Started</button>
        </Link>
      </div>
    );
  }
}
