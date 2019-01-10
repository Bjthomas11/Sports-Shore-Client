import React, { Component } from "react";
import allTeamsData from "./teamList";

export default class MiddleTeamExample extends Component {
  render() {
    console.log(allTeamsData);

    return <div id="middleDisplay" />;
  }
}
