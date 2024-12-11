import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../support/Pages/HomePage"; 
import basePage from "../../support/Pages/BasePage"; 

// Featured items carousel

Given("I visit the Blaze page", () => {
  homePage.visit("https://www.demoblaze.com");
});

// Steps for "Click on the next arrow to see the next featured item"
When("I visualize the first featured item", () => {
  homePage.validateFeaturedItem(); 
});

Then("I click on the next arrow", () => {
  homePage.clickNextArrow(); 
});

Then("I see the next featured item", () => {
  homePage.validateFeaturedItem(); 
});

// Steps for "Wait for the carousel to change the featured item"
Then("I wait for five seconds", () => {
  cy.wait(5000);
  homePage.validateFeaturedItem();});
// "Click on the third option below to see the next featured item"
Then("I click the third option below", () => {
  homePage.clickCarouselIndicator(3); 
});

Then("I go to the About Us page", () => {
  cy.url().should("include", "/about-us");
  cy.get('#aboutUsContent').should('be.visible'); 
});