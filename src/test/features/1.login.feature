Feature: Verify the user authentication

  Background: 
    Given User navigates to the login page

  Scenario: User should be able to log in successfully
    Given User types the correct username
    And User types the correct password
    When User clicks the login button
    Then Header text observed
