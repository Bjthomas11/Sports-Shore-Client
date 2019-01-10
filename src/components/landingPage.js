import React, { Component } from "react";
import LandingNavbar from "./landingNavbar";
import MiddleTeamExample from "./middleTeamExample";
import BottomSection from "./bottomSection";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingNavbar />
        <MiddleTeamExample />
        <BottomSection />
      </div>
    );
  }
}
