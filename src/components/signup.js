import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import NavBar from "./navBar";
import Input from "./input";
import { required, nonEmpty, matches, length, isTrimmed } from "../validators";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class Signup extends Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div>
        <NavBar />
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="firstName">First name</label>
          <Field component={Input} type="text" name="firstName" />
          <label htmlFor="lastName">Last name</label>
          <Field component={Input} type="text" name="lastName" />
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(Signup);

// export default class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       lastName: "",
//       firstName: "",
//       password: "",
//       showError: false,
//       errorMessage: ""
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleFocus = this.handleFocus.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       showError: false
//     });
//   }

//   handleFocus() {
//     this.setState({
//       showError: false
//     });
//   }

//   addTeam(username) {
//     console.log(API_BASE_URL);
//     fetch(`${API_BASE_URL}/teams`, {
//       method: "POST",
//       body: JSON.stringify({
//         team: [],
//         user: username
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
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   handleSubmit(event) {
//     console.log("name " + this.state.username);
//     event.preventDefault();
//     fetch(`${API_BASE_URL}/api/users`, {
//       method: "POST",
//       body: JSON.stringify({
//         username: this.state.username,
//         lastName: this.state.lastName,
//         firstName: this.state.firstName,
//         password: this.state.password
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         if (!data.ok) {
//           return Promise.reject(data);
//         }
//       })
//       .catch(error => {
//         console.log(error);
//         this.setState({
//           showError: true,
//           errorMessage: error.message
//         });
//       });
//     this.addTeam(this.state.username);
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />

//         <div id="signup">
//           <form onSubmit={this.handleSubmit}>
//             {this.state.showError && (
//               <p className="error">{this.state.errorMessage}</p>
//             )}
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//             />
//             <input
//               type="text"
//               placeholder="Username"
//               minLength="1"
//               name="username"
//               value={this.state.username}
//               onFocus={this.handleFocus}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               minLength="8"
//               maxLength="72"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//               className="inputLogin"
//               required
//             />
//             <input
//               type="submit"
//               id="submitButtonLogin"
//               className="loginButton"
//               value="SignUp"
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
