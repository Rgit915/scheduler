/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, waitForElement, fireEvent, getByText, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";

/*
  A test that renders a React Component
*/
describe("Application", () => {

  it("defaults to Monday and changes the schedule when a new day is selected", async () => {

    //create fucntion 'getByText' to query and interact with elements rendered in the component
    const { getByText } = render(<Application />);

    // ensuring that the "Monday" element is present in the rendered component before proceeding with the test.
    // use 'waitForElement' func to wait until "Monday" element is available, once avaialbel continues
    await waitForElement(() => getByText("Monday"));

    //click event on the element"Tuesday", used to change the selected day from Monday to Tuesday in appointment schedule
    fireEvent.click(getByText("Tuesday"));

    //assertion - checks whether an element with text'Leopold Silvers' is present in the component after click event
    // If it's - it'll pass otherwise -it'll fail
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {

    // Render the Application.
    const { container, debug } = render(<Application />);

    //Wait until the text "Archie Cohen" is displayed.
    await waitForElement(() => getByText(container, "Archie Cohen"));

    /* Use the getAllByTestId query, search for all of the appointments in the container.
     * Store the returned value locally in the test and use prettyDOM to print it.
    */
    const appointments = getAllByTestId(container, "appointment");

    //first element in the appointments array
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));
    debug();
    console.log(prettyDOM(appointment));
  });
});
