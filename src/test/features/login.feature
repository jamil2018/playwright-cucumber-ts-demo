Feature: User authentication validations

  Background: 
    Given User navigates to the application
    And User click on the login link

  Scenario: User should be able to login for valid credentials
    Given User enters the username as 'sample-user'
    And User enters the password as 'secret-sauce'
    When User clicks on the login button
    Then Login should be successful

  Scenario: User should not be able to login for invalid credentials
    Given User enters the username as 'sample-user'
    And User enters the password 'not-secret-sauce'
    When User clicks on the login button
    But Login should be unsuccessful
