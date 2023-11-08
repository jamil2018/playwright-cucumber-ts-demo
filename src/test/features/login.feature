Feature: Verify the user authentication

  Background: 
    Given User navigates to the login page

  Scenario: User should be able to log in successfully
    Given User types the username as "standard_user"
    And User types the password as "secret_sauce"
    When User clicks the login button
    Then Login should be successful
