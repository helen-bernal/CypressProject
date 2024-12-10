Feature: General Tests
Background:
    Given I visit the Blaze Store page

Scenario:categories selection
When I select Phones category
Then I viasualize products of Phones category
And I select Laptops category
And I viasualize products of Laptops category
And I select Monitors category
And I viasualize products of Monitors category

Scenario:product selection
When I select a random product
Then recognize the name of the product selected
And I click on the product
And I am redirected to the page with the name of the product as a title

Scenario:adding product to cart
When I select a random product
Then I click on the product
And I am redirected to the page with the name of the product as a title
And i click on the bottom "Add to cart"
And i see the message "Product added"

Scenario:buying cart
When I click on the menu Cart
Then I see the products I have added to cart
And I click on Place order
And I fill the fields
And I click on purchase
And I see the message "Thank you for your purchase!"

Scenario:removing element from cart
When I click on the menu Cart
Then I see the products I have added to cart
And I select a product
And I click on delete