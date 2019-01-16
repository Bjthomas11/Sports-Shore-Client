import React, { Component } from "react";
import Header from "./header";
import ShowAllTeams from "./showAllTeams";
import AddTeamSelection from "./addTeamSelection";
import TeamNewsArt from "./teamNewsArt";
import { API_BASE_URL } from "../config";
import "./main.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      hide: true
    };
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  editTeams(hide) {
    this.setState({
      hide
    });
  }

  addTeam(team) {
    this.setState({
      teams: [...this.state.teams, { team }]
    });
    console.log("Teams", team);
    fetch(`${API_BASE_URL}/teams/` + localStorage.getItem("username"), {
      method: "POST",
      body: JSON.stringify({
        team: team,
        user: localStorage.getItem("username")
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateTeam(team) {
    this.setState({
      teams: [...this.state.teams, { team }]
    });
    console.log("Teams", team);
    fetch(`${API_BASE_URL}/teams/` + localStorage.getItem("username"), {
      method: "PUT",
      body: JSON.stringify({
        team: team,
        user: localStorage.getItem("username")
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/teams/` + localStorage.getItem("user"))
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          teams: data.teams,
          id: data.teams[0].id
        });
        let teams = data.teams[0].team.toString();
        let teamsForNewsString = teams.replace(/,/g, '" OR "');

        this.getNews(teamsForNewsString);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const teams = this.state.teams.map((team, index) => (
      <ShowAllTeams {...team} key={index} />
    ));

    return (
      <div className="teamList">
        <Header />
        <div id="mainContent">
          <ul className="lists">
            <li className="addTeams">
              <AddTeamSelection
                onAdd={team => this.addTeam(team)}
                onUpdate={team => this.updateTeam(team)}
                savedTeams={this.state.teams[0]}
                onEdit={hide => this.editTeams(hide)}
                teams={this.state.teams}
              />
            </li>
            {this.state.hide && <>{teams}</>}
          </ul>
          {this.state.hide && <TeamNewsArt />}
        </div>
      </div>
    );
  }
}
