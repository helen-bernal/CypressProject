class BasePage {
    // Método para visitar una URL específica
    visit(url) {
      cy.visit(url);
    }
  
    // Método para hacer clic en un elemento
    click(selector) {
      cy.get(selector).click();
    }
  
    // Método para escribir texto en un campo de entrada
    type(selector, text) {
      cy.get(selector).clear().type(text);
    }
  
    // Método para verificar que un texto específico está visible en la página
    verifyTextVisible(selector, expectedText) {
      cy.get(selector).should("contain.text", expectedText);
    }
  
    // Método para verificar que la URL contiene un fragmento específico
    verifyUrlContains(fragment) {
      cy.url().should("include", fragment);
    }
  
    // Método para esperar un tiempo específico (evitarlo si es posible)
    wait(seconds) {
      cy.wait(seconds * 1000);
    }
  
    // Método para verificar que un elemento está visible
    verifyElementVisible(selector) {
      cy.get(selector).should("be.visible");
    }
  }
  
  export default BasePage;