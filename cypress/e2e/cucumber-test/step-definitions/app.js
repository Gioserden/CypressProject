import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep( "I open an example page", () => {
  cy.visit("https://www.example.com");
});

defineStep("I see the title {string}", (name) => {
  cy.get("h1").should("be.visible")
  cy.get("h1").should("contain", `${name}`)
})