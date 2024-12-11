class BasePage {
  // Method to visit a specific URL
  visit(url) {
    cy.visit(url);
    cy.get('header').should('be.visible'); 
  }

  // Method to click on an element
  click(selector) {
    cy.get(selector)
      .should('be.visible')
      .and('not.be.disabled') 
      .click();
  }

  // Method to type text into an input field
  type(selector, text) {
    cy.get(selector)
      .clear()
      .type(text)
      .should('have.value', text); 
  }

  // Method to verify that a specific text is visible on the page
  verifyTextVisible(selector, expectedText) {
    cy.get(selector, { timeout: 10000 })  
      .should('contain.text', expectedText);
  }

  // Method to verify that the URL contains a specific fragment
  verifyUrlContains(fragment) {
    cy.url().should('include', fragment);
  }

  // Method to wait for a specific time (avoid if possible)
  wait(seconds) {
    cy.wait(seconds * 1000);
  }

  // Method to verify that an element is visible
  verifyElementVisible(selector) {
    cy.get(selector, { timeout: 10000 })  
      .should('be.visible');
  }
  
  // Verify if a modal is visible
  verifyModalVisible(modalSelector) {
    cy.get(modalSelector).should('be.visible');
  }

  // Fill out a form inside a modal
  fillForm(fields, values) {
    fields.forEach((field, index) => {
      cy.get(field)
        .clear()
        .type(values[index])
        .should('have.value', values[index]);  
    });
  }

  // Submit a form inside a modal
  submitForm(submitButtonSelector) {
    cy.get(submitButtonSelector).click();
  }
}

export default new BasePage();