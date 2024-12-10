import BasePage from "./BasePage";

class HomePage extends BasePage {
  constructor() {
    super();
    // Selectores generales del carrusel
    this.carouselRightArrow = '.carousel-control-next';
    this.featuredItem = '.carousel-item.active';
    this.thirdCarouselOption = '.carousel-indicator:nth-child(3)';
    
    // Enlaces del menú de navegación
    this.headerLinks = {
      home: 'a[href="/home"]',
      contact: 'a[href="#contact"]',
      aboutUs: 'a[href="#about-us"]',
      cart: 'a[href="#cart"]',
      login: 'a[href="#login"]',
      signUp: 'a[href="#signup"]', // Agregado "Sign Up"
    };

    // Modal y formularios de contacto, about us, login y sign up
    this.contactModal = "#contactModal";
    this.contactFormFields = {
      name: "#contactName",
      email: "#contactEmail",
      message: "#contactMessage",
    };
    this.contactSubmitButton = "#contactSubmit";

    this.aboutUsVideo = "#aboutUsVideo";

    this.loginModal = "#loginModal";
    this.loginFormFields = {
      username: "#loginUsername",
      password: "#loginPassword",
    };
    this.loginSubmitButton = "#loginSubmit";

    this.signUpModal = "#signUpModal";  // Modal de "Sign Up"
    this.signUpFormFields = {
      username: "#signUpUsername",
      email: "#signUpEmail",
      password: "#signUpPassword",
    };
    this.signUpSubmitButton = "#signUpSubmit";  // Botón de envío del formulario
  }

  // Método genérico para hacer clic en cualquier enlace del menú
  clickHeaderLink(linkName) {
    if (this.headerLinks[linkName]) {
      this.click(this.headerLinks[linkName]);
    } else {
      throw new Error(`Enlace de menú no encontrado: ${linkName}`);
    }
  }

  // Validación del carrusel
  clickCarouselRightArrow() {
    this.click(this.carouselRightArrow);
  }

  validateFeaturedItem() {
    this.verifyElementVisible(this.featuredItem);
  }

  clickThirdCarouselOption() {
    this.click(this.thirdCarouselOption);
  }

  // Métodos para el modal de contacto
  validateContactModalVisible() {
    this.verifyElementVisible(this.contactModal);
  }

  fillContactForm(name, email, message) {
    this.type(this.contactFormFields.name, name);
    this.type(this.contactFormFields.email, email);
    this.type(this.contactFormFields.message, message);
  }

  submitContactForm() {
    this.click(this.contactSubmitButton);
  }

  // Métodos para "About Us" (si es un video, como ejemplo)
  validateAboutUsVideoVisible() {
    this.verifyElementVisible(this.aboutUsVideo);
  }

  // Métodos para el modal de login
  validateLoginModalVisible() {
    this.verifyElementVisible(this.loginModal);
  }

  fillLoginForm(username, password) {
    this.type(this.loginFormFields.username, username);
    this.type(this.loginFormFields.password, password);
  }

  submitLoginForm() {
    this.click(this.loginSubmitButton);
  }

  // Métodos para el modal de "Sign Up"
  validateSignUpModalVisible() {
    this.verifyElementVisible(this.signUpModal);
  }

  fillSignUpForm(username, email, password) {
    this.type(this.signUpFormFields.username, username);
    this.type(this.signUpFormFields.email, email);
    this.type(this.signUpFormFields.password, password);
  }

  submitSignUpForm() {
    this.click(this.signUpSubmitButton);
  }
}

export default new HomePage();