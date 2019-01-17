import React from "react";
import { Link } from "react-router-dom";
import "./middleHeader.css";

export default class MiddleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="middleInfo">
        <div />
        <div id="middleContent">
          <p id="descrition">
            A one-stop source of aggregated news articles based on only the
            favorite teams that you've selected.
          </p>
          <Link to={"/registration"}>
            <button id="getStarted">Choose your teams</button>
          </Link>
        </div>
      </div>
    );
  }
}
