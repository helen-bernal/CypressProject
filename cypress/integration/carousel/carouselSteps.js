import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const carousel = {
  rightArrow: '.carousel-control-next', // Selector para el botón de la flecha derecha
  featuredItem: '.carousel-item.active', // Selector para el ítem destacado actual
  thirdOption: '.carousel-indicator:nth-child(3)', // Selector para la tercera opción (puede variar según tu DOM)
};

// Background
Given("I visit the Blaze Store page", () => {
  cy.visit("https://blazestore.example.com"); // Reemplaza con la URL real de tu tienda
});

// Steps for "Click on the right arrow to see the next featured item"
When("I visualize the first featured item", () => {
  cy.get(carousel.featuredItem).should("be.visible");
});

Then("I click on the right arrow", () => {
  cy.get(carousel.rightArrow).click();
});

Then("I see the next featured item", () => {
  cy.get(carousel.featuredItem)
    .should("be.visible")
    .should("not.have.class", "carousel-item-start"); // Asegúrate de que cambió
});

// Steps for "Wait for the carousel to change the featured item"
Then("I wait for five seconds", () => {
  cy.wait(5000); // Espera explícita de 5 segundos
});

// Steps for "Click on the third option below to see the next featured item"
Then("I click the third option below", () => {
  cy.get(carousel.thirdOption).click();
});

Then("I go to the About Us page", () => {
  cy.url().should("include", "/about-us"); // Verifica que la URL es la esperada
  cy.get("h1").should("contain.text", "About Us"); // Verifica el título de la página
});