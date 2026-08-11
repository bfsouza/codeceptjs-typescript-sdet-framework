@hybrid
Feature: ServeRest Hybrid flow

  Scenario: Register and login a new user then verify the home page
    Given I prepare a new API user
    When I register the user
    Then the registration is successful
    When I login with that user
    Then I receive an authorization token
    When I open the home page
    Then I should see the home page title
