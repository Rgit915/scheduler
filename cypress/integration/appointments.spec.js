
describe("Appointments", () => {

  it("should book an interview", () => {


    //visit the root of the web server, and confirm that the DOM contains the text "Monday"
    cy.visit("/");
    cy.contains("Monday");

    //Clicks on the "Add" button in the second appointment
    cy.get("[alt=Add]")
      .first()
      .click();

    //Enters their name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

    // chooses an interviewer
    cy.get("[alt='Sylvia Palmer']").click();

    //clicks the save button
    cy.contains("Save").click();

  });


});

