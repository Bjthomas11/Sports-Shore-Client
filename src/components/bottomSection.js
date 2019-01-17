import React, { Component } from "react";
import "./bottomSection.css";

export default class BottomSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bottomContent">
        <h2 className="landingHeaderText">
          <span>Some of our sources</span>
        </h2>
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.bbc.co.uk/sport&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.bleacherreport.com&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://espn.go.com&size=70..120..200"
          className="sourcIcons"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.foxsports.com&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=https://news.google.com&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.nhl.com/news&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.nfl.com/news&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.mlb.com/news&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=https://news.vice.com&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />
        <img
          src="https://icon-locator.herokuapp.com/icon?url=http://www.usatoday.com/news&size=70..120..200"
          className="sourcIcons"
          alt="Article sourece logo"
        />

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
