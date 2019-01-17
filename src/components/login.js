import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter } from "react-router-dom";
import { login } from "../actions/auth";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import NavBar from "./navBar";
import "./registrationForm.css";
import { API_BASE_URL } from "../config";

export default class Login extends Component {
  // onSubmit(values) {
  //   return this.props.dispatch(login(values.username, values.password));
  // }
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
      });
  }

  redirectMain() {
    window.location = "/main";
  }

  render() {
    return (
      <div>
        <NavBar />

        <div id="signup">
          <form onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

{
  /* export default withRouter(
  reduxForm({
    form: "login",
    onSubmitFail: (errors, dispatch) => dispatch(focus("Login", "username"))
  })(Login)
); */
}
