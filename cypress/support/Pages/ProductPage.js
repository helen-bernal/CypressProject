import BasePage from "./BasePage";

class ProductPage extends BasePage {
  constructor() {
    super();
    
    // Product page-specific selectors
    this.productTitle = '.name'; // The product title selector (ensure this is correct)
    this.addToCartButton = 'a:contains("Add to cart")'; // The "Add to cart" button selector
  }

  // Method to get the product title text
  getProductTitle() {
    return cy.get(this.productTitle).invoke('text'); // Get the text of the product title
  }

  // Method to click the "Add to cart" button
  addToCart() {
    cy.get(this.addToCartButton).click(); // Click on the "Add to cart" button
  }

  // Method to verify that the product name is the page title
  verifyProductTitle() {
    this.getProductTitle().then(title => {
      cy.get('h2').should('have.text', title); // Assuming the product name appears in an <h2> tag
    });
  }
}

export default new ProductPage();