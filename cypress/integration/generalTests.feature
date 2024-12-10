Feature: General Tests

  Background:
    Given I visit the Blaze Store page

  Scenario: Categories selection
    When I select the Phones category
    Then I visualize the products of the Phones category
    And I select the Laptops category
    And I visualize the products of the Laptops category
    And I select the Monitors category
    And I visualize the products of the Monitors category

  Scenario: Product selection
    When I select a random product
    Then I recognize the name of the selected product
    And I click on the product
    And I am redirected to the page with the name of the product as the title

  Scenario: Adding a product to the cart
    When I select a random product
    And I click on the product
    And I am redirected to the page with the name of the product as the title
    And I click on the button "Add to cart"
    Then I see the message "Product added"

  Scenario: Buying the cart
    When I click on the Cart menu
    Then I see the products I have added to the cart
    And I click on "Place order"
    And I fill in the fields
    And I click on "Purchase"
    Then I see the message "Thank you for your purchase!"

  Scenario: Removing an item from the cart
    When I click on the Cart menu
    Then I see the products I have added to the cart
    And I select a product
    And I click on "Delete"