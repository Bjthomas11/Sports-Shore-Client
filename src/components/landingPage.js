import React, { Component } from "react";
import LandingNavbar from "./landingNavbar";
import MiddleTeamExample from "./middleTeamExample";
import BottomSection from "./bottomSection";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/main" />;
  }

  return (
    <div>
      <LandingNavbar />
      <MiddleTeamExample />
      <BottomSection />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
