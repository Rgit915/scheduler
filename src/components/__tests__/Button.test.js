import React from 'react';
import { render } from "@testing-library/react";
import Button from "components/Button";

describe("Button component tests: ",() =>{
  it("renders without crashing", () => {
    render(<Button />);
  });

});
