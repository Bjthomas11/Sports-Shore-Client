import React, { Component } from "react";
import "./bottomSection.css";

export default class BottomSection extends Component {
  render() {
    return (
      <div id="bottomContent">
        <h2 className="landingHeaderText">
          <span>Outside Resources</span>
        </h2>
        <a
          href="https://bleacherreport.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://icon-locator.herokuapp.com/icon?url=http://www.bleacherreport.com&size=70..120..200"
            className="sourceIcons"
            alt="Article sourece logo"
          />
        </a>
        <a
          href="http://www.espn.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://icon-locator.herokuapp.com/icon?url=http://espn.go.com&size=70..120..200"
            className="sourceIcons"
            alt="espn logo"
          />
        </a>
        <a href="http://www.nfl.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://icon-locator.herokuapp.com/icon?url=http://www.nfl.com/news&size=70..120..200"
            className="sourceIcons"
            alt="Article sourece logo"
          />
        </a>
        <a href="http://www.mlb.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://icon-locator.herokuapp.com/icon?url=http://www.mlb.com/news&size=70..120..200"
            className="sourceIcons"
            alt="Article sourece logo"
          />
        </a>
        <a href="http://www.nba.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://icon-locator.herokuapp.com/icon?url=http://www.nba.com/news&size=70..120..200"
            className="sourceIcons"
            alt="Article sourece logo"
          />
        </a>

        <footer className="footer">
          <p>
            Created by: Brian Thomas
            <a
              href="https://github.com/Bjthomas11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
