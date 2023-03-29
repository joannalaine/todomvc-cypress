// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createDefaultTodos", (tasks) => {
  if (typeof tasks === "number") {
    for (let index = 0; index < tasks; index++) {
      cy.window()
        .its("model")
        .invoke("addTodo", "Task " + `${index + 1}`);
    }
  } else {
    if (typeof tasks === "string") {
      tasks = [tasks];
    }
    tasks.forEach((task) => {
      cy.window().its("model").invoke("addTodo", task);
    });
  }
});
