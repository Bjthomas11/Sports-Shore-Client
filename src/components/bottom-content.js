import React from "react";
import "./bottom-content.css";

export default class BottomContent extends React.Component {
  render() {
    return (
      <div id="bottomContent">
        <hr className="style-two" />
        <h2 className="landingHeaderText">
          <span>Outside Resources</span>
        </h2>
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.bleacherreport.com&size=70..120..200"
          className="sourceIcons"
          alt="resource img"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://espn.go.com&size=70..120..200"
          className="sourceIcons"
          alt="resource img"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.nfl.com/news&size=70..120..200"
          className="sourceIcons"
          alt="resource img"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.mlb.com/news&size=70..120..200"
          className="sourceIcons"
          alt="resource img"
        />
      </div>
    );
  }
}
