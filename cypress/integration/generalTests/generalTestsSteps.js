import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage";  // Home page
import CartPage from "../../support/Pages/CartPage";  // Cart page
import ProductPage from "../../support/Pages/ProductPage"; // Product page
import CheckoutPage from "../../support/Pages/CheckoutPage"; // Checkout page

// Scenario: Categories selection
Given("I visit the Blaze Store page", () => {
  cy.visit("/"); // Visit the page URL
});

When("I select the Phones category", () => {
  HomePage.selectCategory("phones"); // Select the "Phones" category
});

Then("I visualize products of Phones category", () => {
  HomePage.verifyCategoryProducts("Phones"); // Verify products in the "Phones" category
});

When("I select the Laptops category", () => {
  HomePage.selectCategory("laptops"); // Select the "Laptops" category
});

Then("I visualize products of Laptops category", () => {
  HomePage.verifyCategoryProducts("Laptops"); // Verify products in the "Laptops" category
});

When("I select the Monitors category", () => {
  HomePage.selectCategory("monitors"); // Select the "Monitors" category
});

Then("I visualize products of Monitors category", () => {
  HomePage.verifyCategoryProducts("Monitors"); // Verify products in the "Monitors" category
});

// Scenario: Product selection
When("I select a random product", () => {
  HomePage.selectRandomProduct(); // Select a random product
});

Then("I recognize the name of the selected product", () => {
  HomePage.verifyProductName(); // Verify the product name
});

When("I click on the product", () => {
  HomePage.clickProduct(); // Click on the product
});

Then("I am redirected to the page with the name of the product as the title", () => {
  ProductPage.verifyProductTitle(); // Verify that the product title is the page title
});

// Scenario: Adding a product to the cart
When("I click on the product", () => {
  ProductPage.clickProduct(); // Click on the product
});

Then("I am redirected to the page with the name of the product as the title", () => {
  ProductPage.verifyProductTitle(); // Verify the product title is the page title
});

And("I click on the button 'Add to cart'", () => {
  ProductPage.addToCart(); // Add the product to the cart
});

// Scenario: Buying the cart
When("I click on the Cart menu", () => {
  HomePage.clickHeaderLink("cart"); // Click on the Cart menu
});

Then("I see the products I have added to the cart", () => {
  CartPage.verifyProductsInCart(); // Verify the products in the cart
});

When("I click on Place order", () => {
  CartPage.clickPlaceOrderButton(); // Click on "Place order"
});

And("I fill in the fields", () => {
  CheckoutPage.fillCheckoutForm(); // Fill out the checkout form
});

And("I click on purchase", () => {
  CheckoutPage.clickPurchaseButton(); // Click on the purchase button
});

Then("I see the message 'Thank you for your purchase!'", () => {
  CheckoutPage.verifyPurchaseConfirmation(); // Verify the purchase confirmation message is visible
});

// Scenario: Removing an item from the cart
When("I click on the Cart menu", () => {
  HomePage.clickHeaderLink("cart"); // Click on the Cart menu
});

Then("I see the products I have added to the cart", () => {
  CartPage.verifyProductsInCart(); // Verify the products in the cart
});

When("I select a product", () => {
  CartPage.selectProductToDelete(); // Select a product to delete
});

And("I click on delete", () => {
  CartPage.deleteProduct(); // Click on delete to remove the product
});

Then("I see the product removed from the cart", () => {
  CartPage.verifyProductRemoved(); // Verify the product was removed from the cart
});