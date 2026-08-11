@api
Feature: ServeRest API

  Scenario: Retrieve users list
    When I request the users list
    Then the user response should contain a list of users

  Scenario: Retrieve products list
    When I request the products list
    Then the product response should contain a list of products

  Scenario: Retrieve carts list
    When I request the carts list
    Then the carts response should contain a list of carts

  Scenario: Register and login a new API user
    Given I prepare a new API user
    When I register the user
    Then the registration is successful
    When I login with that user
    Then I receive an authorization token
