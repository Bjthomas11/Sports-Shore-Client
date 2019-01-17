import React from "react";
import teamData from "./teamList";
import "./middleTeamExample.css";

export default class MiddleTeamExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(teamData);

    return (
      <div id="middleDisplay">
        <h2 id="middleDescription">
          Once you've selected your teams, a feed of aggregated news from the
          leading sports outlets will appear.
        </h2>

        <div id="exampleFeed">
          <div id="exampleTeamList">
            <li className="teamEx">
              Lakers
              <img src={teamData.NBA[13].logo} className="teamIconList" />
            </li>

            <li className="teamEx">
              Dodgers
              <img src={teamData.MLB[14].logo} className="teamIconList" />
            </li>

            <li className="teamEx">
              Mets
              <img src={teamData.MLB[2].logo} className="teamIconList" />
            </li>

            <li className="teamEx">
              Rams
              <img src={teamData.NFL[24].logo} className="teamIconList" />
            </li>

            <li className="teamEx">
              Knicks
              <img src={teamData.NBA[19].logo} className="teamIconList" />
            </li>
          </div>
        </div>
      </div>
    );
  }
}
