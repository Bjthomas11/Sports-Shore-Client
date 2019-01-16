import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { withRouter, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import NavBar from "./navBar";

export class Login extends Component {
  onSubmit(values) {
    this.props.dispatch(login(values.username, values.password));
    return <Redirect to="/main" />;
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
          className="login-form"
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
          <button disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
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
