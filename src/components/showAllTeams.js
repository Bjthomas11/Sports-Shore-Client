import React, { Component } from "react";
import allTeamsData from "./teamList";
import "./teams.css";

export default class ShowAllTeams extends Component {
  render() {
    let teams = this.props.team;

    let aggLeagues = [];

    allTeamsData.NBA.map(team => {
      aggLeagues.push(team);
    });

    allTeamsData.MLB.map(team => {
      aggLeagues.push(team);
    });

    allTeamsData.NFL.map(team => {
      aggLeagues.push(team);
    });

    let team = teams.map((team, index) => {
      let teamIndex = aggLeagues
        .map(function(team) {
          return team.team;
        })
        .indexOf(team);

      return (
        <li key={index} className={"teams"}>
          {team}

          <img
            src={aggLeagues[teamIndex].logo}
            className="teamIconList"
            alt="teamLogo"
          />
        </li>
      );
    });

    return <>{team}</>;
  }
}
