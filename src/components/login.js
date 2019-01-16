import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter } from "react-router-dom";
import { login } from "../actions/auth";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import NavBar from "./navBar";
import "./registrationForm.css";

export class Login extends Component {
  onSubmit() {
    this.props
      .dispatch(login(this.state.username, this.state.password))
      .then(() => this.props.history.push("/main"));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <form
          className="signup"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required, nonEmpty]}
          />
          <input
            type="submit"
            id="submitButtonLogin"
            className="loginButton"
            disabled={this.props.pristine || this.props.submitting}
            value="Login"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "login",
    onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
  })(Login)
);
