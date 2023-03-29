/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {

    /**
     * Creates To Do items using app model
     * @example
     *  cy.createDefaultTodos(3)
     *  cy.createDefaultTodos("do this")
     *  cy.createDefaultTodos(["do this", "do that"])
     */
    createDefaultTodos(tasks)

  }
}