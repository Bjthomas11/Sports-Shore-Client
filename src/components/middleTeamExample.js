import React, { Component } from "react";
import teamList from "./teamList";
import "./middleTeamExample.css";

export default class MiddleTeamExample extends Component {
  render() {
    console.log(teamList);

    return (
      <div id="middleDisplay">
        <h2 id="middleDescription">
          Select your favorite teams and the current news from the most popular
          sports outlets will appear
        </h2>
        <div id="exampleFeed">
          <div id="exampleteamList" className="teamExContainer">
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
        </div>
      </div>
    );
  }
}
