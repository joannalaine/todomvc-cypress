describe("Completing tasks", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.createDefaultTodos(2);
    cy.createDefaultTodos("my task");
    cy.createDefaultTodos(["next task", "last task"]);
  });

  it("should complete the first active task", () => {
    cy.get(".todo-list li .toggle").eq(0).check().should("be.checked");
    cy.get(".todo-list li label")
      .eq(0)
      .should("have.css", "text-decoration-line", "line-through");
  });
});
