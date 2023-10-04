import React from "react";

import { render, cleanup, fireEvent, getByText } from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {

  const interviewers = [
    {
      id: 1,
      student: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];


  it("renders without student name if not provided", () => {
    //destructure the getByPlaceholderText test helper function from the object that render returns
    // and use the fake interviewers data as a prop that we pass to the Form.
    const { getByPlaceholderText } = render(
      <Form interviewers={interviewers} />
    );
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    // If we want to make the Form render with a student name, we can pass it a student prop.
    const { getByTestId } = render(
      <Form interviewers={interviewers} name="Lydia Miller-Jones" />
    );
    expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  });

  it("save button clicked", () =>{
    const mockOnSave = jest.fn(); // Create a mock function

const { container } = render(
  //add onSave prop - function that gets called when the Save button is clicked in Form
  <Form interviewers={interviewers} name="Lydia Miller-Jones" onSave={mockOnSave} />
);
// pass an argument that is the element we want to click,
// to find the "Save" button use the getByText query and 'click' is the eventName
    fireEvent.click(getByText(container, "Save"));
  })
});