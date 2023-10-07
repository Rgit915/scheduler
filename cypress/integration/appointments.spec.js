
describe("Appointments", () => {

  it("should book an interview", () => {

    /*

     If we run the test a second time,
      it will fail because there will already be an appointment in the slot
       that we try to click. We should use the cy.request(method, url) command
        to "GET" to "/api/debug/reset" at the beginning of the test function.
    */

    cy.request("GET", "/api/debug/reset");
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

    //verify that we show the student and interviewer names within
    //an element that has the ".appointment__card--show" class.
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });


});

