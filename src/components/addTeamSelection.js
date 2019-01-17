import React, { Component } from "react";
import "./addTeamSelection.css";
import teamData from "./teamList";

export default class AddTeamSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      checked: false
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var checked = document.querySelectorAll(".input:checked");
    var selectedTeams = Array.from(checked).map(function(team) {
      return team.value;
    });
    this.props.onUpdate(selectedTeams);
    this.setState({
      editing: false
    });
  }

  setEditing(editing) {
    this.setState({
      editing
    });
    this.props.onEdit(!editing);
  }

  handleCheck() {
    var checked = document.querySelectorAll(".input:checked");
    var selectedTeams = Array.from(checked).map(function(team) {
      return team.value;
    });

    console.log("checked", selectedTeams);
    this.setState({
      checked: !this.state.checked
    });
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className="add-button">
          <h1 id="team">Teams</h1>
          <button id="addTeam" onClick={() => this.setEditing(true)} />
        </div>
      );
    }

    let savedTeams = this.props.savedTeams.team;
    let nbaTeams = teamData.NBA.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="NBA team logo" />
          <label className="teamLabel">
            <input
              type="checkbox"
              id="checkboxTeam"
              value={team.team}
              className="form-check-input input"
              onChange={this.handleCheck}
              defaultChecked={savedTeams.includes(team.team) ? true : false}
            />
            {team.team}
          </label>
        </div>
      );
    });

    let mlbTeams = teamData.MLB.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="MLB team logo" />
          <label className="teamLabel">
            <input
              type="checkbox"
              value={team.team}
              className="form-check-input input"
              onChange={this.handleCheck}
              defaultChecked={savedTeams.includes(team.team) ? true : false}
            />
            {team.team}
          </label>
        </div>
      );
    });

    let nflTeams = teamData.NFL.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="NFL team logo" />
          <label className="teamLabel">
            <input
              type="checkbox"
              value={team.team}
              className="form-check-input input"
              onChange={this.handleCheck}
              defaultChecked={savedTeams.includes(team.team) ? true : false}
            />
            {team.team}
          </label>
        </div>
      );
    });

    return (
      <div className="container">
        <button
          type="button"
          id="cancel"
          onClick={() => this.setEditing(false)}
        />

        <form onSubmit={e => this.onSubmit(e)}>
          <div id="leagues">
            <div id="nba" className="league">
              <h2>NBA</h2>
              <hr />
              {nbaTeams}
            </div>

            <div id="mlb" className="league">
              <h2>MLB</h2>
              <hr />
              {mlbTeams}
            </div>

            <div id="nfl" className="league">
              <h2>NFL</h2>
              <hr />
              {nflTeams}
            </div>
          </div>

          <div className="form-group submitButton" onClick={this.refreshPage}>
            <button className="saveButton">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
