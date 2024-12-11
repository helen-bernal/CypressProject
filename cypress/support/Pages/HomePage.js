import BasePage from "../../support/Pages/BasePage"; 

class HomePage extends BasePage {
  constructor() {
    super();

    // Carousel selectors
    this.carousel = {
      nextArrow: '.carousel-control-next',
      firstIndicator: 'li[data-target="#carouselExampleIndicators"][data-slide-to="0"]',
      secondIndicator: 'li[data-target="#carouselExampleIndicators"][data-slide-to="1"]',
      thirdIndicator: 'li[data-target="#carouselExampleIndicators"][data-slide-to="2"]',
      featuredItem: '.carousel-item.active img', // Ensure this selector is correct
    };

    // Navigation menu links
    this.headerLinks = {
      home: 'a.nav-link[href="index.html"]',
      contact: 'a.nav-link[data-toggle="modal"][data-target="#exampleModal"]',
      aboutUs: 'a.nav-link[data-target="#videoModal"]',
      cart: '#cartut',
      login: '#login2',
      signUp: '#signin2',
    };

    // Modal and forms
    this.contactModal = ".modal-content";
    this.contactFormFields = {
      name: "#recipient-name",
      email: "#recipient-email",
      message: "#message-text",
    };
    this.sendMessageButton = 'button:contains("Send message")';

    this.aboutUsVideo = ".vjs-poster";

    this.loginModal = ".modal-content";
    this.loginFormFields = {
      username: "#loginusername",
      password: "#loginpassword",
    };
    this.logInButton = 'button:contains("Log in")';

    this.signUpModal = ".modal-content";
    this.signUpFormFields = {
      username: "#sign-username",
      email: "#sign-email",  // Assuming there's an email field
      password: "#sign-password",
    };
    this.signUpButton = 'button:contains("Sign up")';

    // Category selectors
    this.categories = {
      phones: 'a:contains("Phones")',
      laptops: 'a:contains("Laptops")',
      monitors: 'a:contains("Monitors")',
    };
  }

  // Carousel methods
  clickNextArrow() {
    this.click(this.carousel.nextArrow);
  }

  validateFeaturedItem() {
    this.verifyElementVisible(this.carousel.featuredItem);
  }

  clickCarouselIndicator(indicatorNumber) {
    const indicator = this.carousel[`indicator${indicatorNumber}`];
    this.click(indicator);
  }

  // Navigation methods
  clickHeaderLink(linkName) {
    if (this.headerLinks[linkName]) {
      this.click(this.headerLinks[linkName]);
    } else {
      throw new Error(`Menu link not found: ${linkName}`);
    }
  }

  // Category selection methods
  selectCategory(categoryName) {
    if (this.categories[categoryName]) {
      this.click(this.categories[categoryName]);
    } else {
      throw new Error(`Category not found: ${categoryName}`);
    }
  }

  // Contact modal methods
  fillContactForm(name, email, message) {
    this.type(this.contactFormFields.name, name);
    this.type(this.contactFormFields.email, email);
    this.type(this.contactFormFields.message, message);
  }

  submitContactForm() {
    this.click(this.sendMessageButton);
  }

  // "About Us" methods
  validateAboutUsVideoVisible() {
    this.verifyElementVisible(this.aboutUsVideo);
  }

  // Login methods
  fillLoginForm(username, password) {
    this.type(this.loginFormFields.username, username);
    this.type(this.loginFormFields.password, password);
  }

  submitLoginForm() {
    this.click(this.logInButton);
  }

  // Sign Up modal methods
  fillSignUpForm(username, email, password) {
    this.type(this.signUpFormFields.username, username);
    this.type(this.signUpFormFields.email, email);
    this.type(this.signUpFormFields.password, password);
  }

  submitSignUpForm() {
    this.click(this.signUpButton);
  }

  // Method to click on a category
  selectCategory(categoryName) {
    const categorySelector = this.categories[categoryName];
    if (categorySelector) {
      this.click(categorySelector);
    } else {
      throw new Error(`Category not found: ${categoryName}`);
    }
  }

  // Method to verify products under a specific category
  verifyCategoryProducts(categoryName) {
    cy.get(`.products-in-${categoryName}`).should('be.visible'); // Adjust selector
  }

  // Method to select a random product (you can improve this based on your structure)
  selectRandomProduct() {
    cy.get('.product-item').then(products => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      cy.wrap(randomProduct).click(); // Click a random product
    });
  }

  
}




export default new HomePage();