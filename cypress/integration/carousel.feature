Feature: Featured items carousel
Background:
    Given I visit the Blaze Store page

Scenario:CLick on the right arrow to see the next featured item
When I visualize the first featured item
Then click on the right arrow
And I see the next featured item

Scenario:Wait for the carousel to change the featured item
When I visualize the first featured item
Then I wait for five seconds
Then I see the next featured item

Scenario:Click on the third option below to see the next featured item
When I visualize the first featured item
Then I click the third option below 
Then I go to the About us Page
