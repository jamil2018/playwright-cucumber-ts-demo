Feature: Add products to the cart and checkout

  Background: 
    Given User logged in to the page

  Scenario: User should be able to add products to the cart
    Given User adds backpack to the cart
    And User adds bikelight to the cart
    When User clicks the cart button
    Then Cart page should appear

  Scenario: User should be able to checkout
    Given User clicks the cart button
    When User clicks the checkout button
    Then Checkout page should appear
    And User types the first name
    And User types the last name
    And User types the zip code
    And User clicks the continue button
    When User clicks the finish button
    Then Order confirm text should appear
