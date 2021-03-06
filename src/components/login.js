import React from "react";
import TopInfo from "./top-info";
import "./signup.css";
import { API_BASE_URL } from "../config";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.username);
    event.preventDefault();
    fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
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
        localStorage.username = this.state.username;
      })
      .then(this.redirectMain)
      .catch(error => {
        console.log(error);
        this.setState({
          showError: true,
          errorMessage:
            "Username may be taken and/or Password is incorrect, Try Again"
        });
      });
  }

  redirectMain() {
    window.location = "/main";
  }

  render() {
    return (
      <div>
        <TopInfo />

        <div id="signup">
          <form className="formContainer" onSubmit={this.handleSubmit}>
            {this.state.showError && (
              <p className="error">{this.state.errorMessage}</p>
            )}
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              className="inputLogin"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="inputLogin"
            />
            <input
              type="submit"
              value="Submit"
              id="submitButtonLogin"
              className="loginButton"
            />
          </form>
        </div>
        <p id="demo">
          Demo Account:
          <br />
          Username: user1
          <br />
          Password: testing123
        </p>
      </div>
    );
  }
}
