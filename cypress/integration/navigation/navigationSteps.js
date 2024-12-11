import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage"; // Import the HomePage class

Given("I visit the Blaze Store page", () => {
  cy.visit('/'); // Visit the homepage URL
});

// Scenario: Navigate to the Home page
When("I click on Home", () => {
  HomePage.clickHeaderLink("home"); // Click on the "Home" link
});

Then("I am redirected to the Home page", () => {
  HomePage.validateCurrentPage("Home"); // Verify that the current page is "Home"
});

// Scenario: Navigate to the Contact page
When("I click on Contact", () => {
  HomePage.clickHeaderLink("contact"); // Click on the "Contact" link
});

Then("I see the Contact modal", () => {
  HomePage.verifyModalVisible(HomePage.contactModal); // Verify that the contact modal is visible
});

// Scenario: Navigate to the About Us page
When("I click on About Us", () => {
  HomePage.clickHeaderLink("aboutUs"); // Click on the "About Us" link
});

Then("I see the About Us video", () => {
  HomePage.verifyElementVisible(HomePage.aboutUsVideo); // Verify that the About Us video is visible
});

// Scenario: Navigate to the Cart page
When("I click on Cart", () => {
  HomePage.clickHeaderLink("cart"); // Click on the "Cart" link
});

Then("I am redirected to the Cart page", () => {
  HomePage.validateCurrentPage("Cart"); // Verify that the current page is "Cart"
});

// Scenario: Navigate to the Log In page
When("I click on Log In", () => {
  HomePage.clickHeaderLink("login"); // Click on the "Log In" link
});

Then("I see the Login modal", () => {
  HomePage.verifyModalVisible(HomePage.loginModal); // Verify that the login modal is visible
});

// Scenario: Navigate to the Sign Up page
When("I click on Sign Up", () => {
  HomePage.clickHeaderLink("signUp"); // Click on the "Sign Up" link
});

Then("I see the Sign Up modal", () => {
  HomePage.verifyModalVisible(HomePage.signUpModal); // Verify that the Sign Up modal is visible
});