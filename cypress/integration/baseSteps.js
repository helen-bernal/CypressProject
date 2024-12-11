import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("/");

});

After(() => {
  cy.window().then((win) => {
    win.close(); 
  });
});