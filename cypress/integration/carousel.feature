Feature: Featured items carousel

  Background:
    Given I visit the Blaze page

  Scenario: Click on the next arrow to see the next featured item
    When I visualize the first featured item
    Then I click on the next arrow
    And I see the next featured item

  Scenario: Wait for the carousel to change the featured item
    When I visualize the first featured item
    And I wait for five seconds
    Then I see the next featured item

  Scenario: Click on the third option below to see the next featured item
    When I visualize the first featured item
    And I click the third option below 
    Then I go to the About Us page