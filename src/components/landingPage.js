import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LandingTop from "./landing-top";
import MiddleContent from "./middle-content";
import BottomContent from "./bottom-content";

export function Landing(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/main" />;
  }

  return (
    <div>
      <LandingTop />
      <MiddleContent />
      <BottomContent />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);
