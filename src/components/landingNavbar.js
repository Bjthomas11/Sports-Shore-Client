import React, { Component } from "react";
import NavBar from "./navBar";
import MiddleHeader from "./middleHeader";

export default class LandingNavbar extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MiddleHeader />
      </div>
    );
  }
}
