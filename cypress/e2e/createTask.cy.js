describe("Creating tasks", () => {
  it("should create a new task", () => {
    cy.visit("/");
    cy.get(".new-todo").type("New task{enter}");
    cy.get(".todo-list li label").should("have.text", "New task");
  });
});
