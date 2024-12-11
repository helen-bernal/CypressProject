import BasePage from "./BasePage";

class CartPage extends BasePage {
  constructor() {
    super();
    // Specific selectors for the cart page
    this.cartItems = '.success';
    this.placeOrderButton = 'button:contains("Place Order")';
    this.deleteItemLink = 'a:contains("Delete")';
  
    this.placeOrder = ".modal-content";
    this.placeOrderFormFields = {
      userName: "#name",
      country: "#country",
      city: "#city",
      card: "#card",
      month: "#mont",
      year: "#year",
    };
  }

  purchaseButton = 'button:contains("Purchase")';

  // Validate that the cart items are visible
  validateCartItemsVisible() {
    this.verifyElementVisible(this.cartItems);

  }
   // Method to verify products in the cart
   verifyProductsInCart() {
    cy.get(this.cartItems).should('be.visible'); // Verify cart items are visible
  }

  // Method to delete a product from the cart
  deleteProduct() {
    this.click(this.deleteItemLink); // Click delete button for a product
  }

  // Method to click "Place Order"
  clickPlaceOrderButton() {
    this.click('.place-order-button'); // Adjust with actual button selector
  }
}

export default new CartPage();