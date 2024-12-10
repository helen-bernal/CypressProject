import BasePage from "./BasePage";

class CartPage extends BasePage {
  constructor() {
    super();
    // Selectores
    this.cartTable = "#cartTable"; // Tabla que contiene los productos
    this.productRow = ".cart-item"; // Fila de producto en el carrito
    this.productName = ".cart-item-name"; // Nombre del producto
    this.productPrice = ".cart-item-price"; // Precio del producto
    this.deleteButton = ".cart-item-delete"; // Botón de eliminar producto
    this.placeOrderButton = "#placeOrder"; // Botón para realizar el pedido
    this.purchaseMessage = "#confirmationMessage"; // Mensaje de confirmación
  }

  // Métodos para interactuar con la página
  validateCartContainsProduct(productName) {
    cy.get(this.productRow)
      .should("contain.text", productName)
      .should("be.visible");
  }

  getProductPrice(productName) {
    return cy
      .get(this.productRow)
      .contains(productName)
      .parents(this.productRow)
      .find(this.productPrice)
      .invoke("text");
  }

  deleteProduct(productName) {
    cy.get(this.productRow)
      .contains(productName)
      .parents(this.productRow)
      .find(this.deleteButton)
      .click();
  }

  validateProductRemoved(productName) {
    cy.get(this.cartTable).should("not.contain.text", productName);
  }

  clickPlaceOrder() {
    this.click(this.placeOrderButton);
  }

  fillOrderDetails(orderDetails) {
    Object.keys(orderDetails).forEach((field) => {
      cy.get(`#${field}`).type(orderDetails[field]);
    });
  }

  validatePurchaseMessage(expectedMessage) {
    cy.get(this.purchaseMessage).should("contain.text", expectedMessage);
  }
}

export default new CartPage();