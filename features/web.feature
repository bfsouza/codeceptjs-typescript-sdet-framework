@web
Feature: ServeRest Web UI

  Scenario: Open login page and verify login form
    Given I open the login page
    Then I should see the login form

  Scenario: Open home page and verify page title
    Given I open the home page
    Then I should see the home page title
