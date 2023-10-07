describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () =>{
    //visit home page
    cy.visit("/");

    //find an element containing the text "Tuesday"
    cy.get("li").contains("Tuesday").click();
    //click it

    //assertion to confirm that the list item element that contains the text "Tuesday" is selected.
    cy.contains("li", "Tuesday")
  .should("have.css", "background-color", "rgb(242, 242, 242)");
  })
});