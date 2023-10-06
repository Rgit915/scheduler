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

  })
});