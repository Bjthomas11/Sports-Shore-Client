import React from "react";
import allTeamsData from "./teamList";
import "./addTeamSelection.css";

export default class AddTeam extends React.Component {
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
    const checked = document.querySelectorAll(".input:checked");
    const selectedTeams = Array.from(checked).map(function(team) {
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
    const checked = document.querySelectorAll(".input:checked");
    const selectedTeams = Array.from(checked).map(function(team) {
      return team.value;
    });

    console.log("checked", selectedTeams);
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className="add-button">
          <h1 id="team">Teams</h1>
          <button id="addTeam" onClick={() => this.setEditing(true)}>
            Add Your Favorite Teams
          </button>
        </div>
      );
    }

    let nbaTeams = allTeamsData.NBA.map((team, index) => {
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
            />
            {team.team}
          </label>
        </div>
      );
    });

    let mlbTeams = allTeamsData.MLB.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="MLB team logo" />
          <label className="teamLabel">
            <input
              type="checkbox"
              value={team.team}
              className="form-check-input input"
              onChange={this.handleCheck}
            />
            {team.team}
          </label>
        </div>
      );
    });

    let nflTeams = allTeamsData.NFL.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="NFL team logo" />
          <label className="teamLabel">
            <input
              type="checkbox"
              value={team.team}
              className="form-check-input input"
              onChange={this.handleCheck}
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
