import React, { Component } from "react";
import "./teams.css";
import teamData from "./teamList";

export default class ShowAllTeams extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let teams = this.props.team;

    let aggLeagues = [];

    teamData.NBA.map(team => {
      aggLeagues.push(team);
    });

    teamData.MLB.map(team => {
      aggLeagues.push(team);
    });

    teamData.NFL.map(team => {
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

          <img src={aggLeagues[teamIndex].logo} className="teamIconList" />
        </li>
      );
    });

    return <>{team}</>;
  }
}
