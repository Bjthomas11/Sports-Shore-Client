import React, { Component } from "react";
import LandingNavBar from "./landingNavbar";
import MiddleTeamExample from "./middleTeamExample";
import BottomSection from "./bottomSection";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LandingNavBar />
        <MiddleTeamExample />
        <BottomSection />
      </div>
    );
  }
}
