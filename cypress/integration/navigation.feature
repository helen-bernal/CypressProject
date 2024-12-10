Feature: Navigation to all header links

  Background:
    Given I visit the Blaze Store page

  Scenario: Navigate to the Home page
    When I click on "Home"
    Then I am redirected to the Home page

  Scenario: Navigate to the Contact page
    When I click on "Contact"
    Then I am redirected to the Contact page

  Scenario: Navigate to the About Us page
    When I click on "About Us"
    Then I am redirected to the About Us page

  Scenario: Navigate to the Cart page
    When I click on "Cart"
    Then I am redirected to the Cart page

  Scenario: Navigate to the Log In page
    When I click on "Log In"
    Then I am redirected to the Log In page

  Scenario: Navigate to the Sign Up page
    When I click on "Sign Up"
    Then I am redirected to the Sign Up page