import React from "react";
import "./add-team.css";
import teamList from "./teamList";

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
          <h1 id="team">Favorite Teams</h1>
          <button id="addTeam" onClick={() => this.setEditing(true)}>
            <i className="fas fa-plus" />
          </button>
        </div>
      );
    }

    let savedTeams = this.props.savedTeams.team;
    let nbaTeams = teamList.NBA.map((team, index) => {
      return (
        <div className="form-check" key={index}>
          <img src={team.logo} className="teamLogo" alt="NBA team logo" />
          <label className="container" className="teamLabel">
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

    let mlbTeams = teamList.MLB.map((team, index) => {
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

    let nflTeams = teamList.NFL.map((team, index) => {
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
        >
          <i className="far fa-times-circle" />
        </button>

        <form className="form-teams" onSubmit={e => this.onSubmit(e)}>
          <div id="leagues">
            <div id="nba" className="league">
              <h2>NBA</h2>
              {nbaTeams}
            </div>
            <hr />

            <div id="mlb" className="league">
              <h2>MLB</h2>
              {mlbTeams}
            </div>
            <hr />

            <div id="nfl" className="league">
              <h2>NFL</h2>
              {nflTeams}
            </div>
          </div>

          <div className="form-group submitButton" onClick={this.refreshPage}>
            <button className="saveButton">Get News!</button>
          </div>
        </form>
      </div>
    );
  }
}
