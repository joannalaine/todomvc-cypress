describe("Completing tasks", () => {
  const TASKS = [
    "mop the kitchen",
    "renew vehicle registration",
    "book a dentist appointment",
  ];

  beforeEach(function () {
    cy.visit("/");
    TASKS.forEach((task) => {
      cy.window().its("model").invoke("addTodo", task);
    });
    cy.get(".todo-list li").as("todos");
  });

  it("should complete the first active task", () => {
    cy.get(".todo-list li .toggle").eq(0).check().should("be.checked");
    cy.get(".todo-list li label")
      .eq(0)
      .should("have.css", "text-decoration-line", "line-through");
  });
});
