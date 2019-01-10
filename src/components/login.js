import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { login } from "../actions/auth";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import NavBar from "./navBar";

export class Login extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(Login);

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     console.log("name" + this.state.username);
//     event.preventDefault();
//     fetch(`${API_BASE_URL}/api/auth/login`, {
//       method: "POST",
//       body: JSON.stringify({
//         username: this.state.username,
//         password: this.state.password
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then(res => {
//         if (!res.ok) {
//           return Promise.reject(res.statusText);
//         }
//         return res.json();
//       })
//       .then(data => {
//         console.log(data);
//         localStorage.username = this.state.username;
//       })
//       .then(this.redirectMain)
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   redirectMain() {
//     window.location = "/main";
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />

//         <div id="signup">
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//             />
//             <input
//               type="submit"
//               value="Submit"
//               id="submitButtonLogin"
//               className="loginButton"
//             />
//             <div id="loginDemo">
//               <p id="loginDemo">Demo Purposes:</p>
//               <ul>
//                 <li>Username: Test</li>
//                 <li>Password: Testing123</li>
//               </ul>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
