import React from "react";
import MiddleContent from "./middle-content";
import BottomContent from "./bottom-content";
import TopInfo from "./top-info";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <TopInfo />
        <MiddleContent />
        <BottomContent />
      </div>
    );
  }
}
