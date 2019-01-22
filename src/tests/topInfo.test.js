import React from "react";
import { shallow } from "enzyme";
import TopInfo from "./../components/top-info";

describe("<TopInfo />", () => {
  it("Renders without crashing", () => {
    shallow(<TopInfo />);
  });
});
