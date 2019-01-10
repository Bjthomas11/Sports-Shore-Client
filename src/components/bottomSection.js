import React, { Component } from "react";

export default class BottomSection extends Component {
  render() {
    return (
      <div id="bottomContent">
        <hr />
        <h2 className="landingHeaderText">
          <p>Outside Resources</p>
        </h2>
        <div>
          <a
            href="http://www.espn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESPN
          </a>
        </div>
        <div>
          <a
            href="https://bleacherreport.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bleacher Report
          </a>
        </div>
        <div>
          <a
            href="https://www.nfl.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFL
          </a>
        </div>
        <div>
          <a
            href="https://www.nba.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NBA
          </a>
        </div>
        <div>
          <a
            href="https://www.mlb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MLB
          </a>
        </div>
      </div>
    );
  }
}
