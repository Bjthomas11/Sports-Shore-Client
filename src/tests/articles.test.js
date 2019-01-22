import React from "react";
import { shallow } from "enzyme";
import Articles from "./../components/articles";

describe("<Articles />", () => {
  it("Renders without crashing", () => {
    shallow(<Articles />);
  });
});
