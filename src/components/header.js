import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export default class Header extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    this.handleClick = () => {
      localStorage.clear();
      window.location = "/login";
    };

    return (
      <div id="header">
        <div id="mainLogoName">Sports Shore</div>

        <Link to={"/main"}>
          <button id="logoutButton" onClick={this.handleClick}>
            Logout
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
