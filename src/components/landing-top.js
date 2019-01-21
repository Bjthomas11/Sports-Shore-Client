import React from "react";
import TopInfo from "./top-info";
import MiddleInfo from "./middle-info";

export default class LandingTop extends React.Component {
  render() {
    return (
      <div>
        <TopInfo />
        <MiddleInfo />
      </div>
    );
  }
}
