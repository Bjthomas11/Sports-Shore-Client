import React from "react";
import { shallow, mount } from "enzyme";
import AddTeam from "./../components/add-team";

describe("<AddTeam />", () => {
  it("Renders without crashing", () => {
    shallow(<AddTeam />);
  });
});
