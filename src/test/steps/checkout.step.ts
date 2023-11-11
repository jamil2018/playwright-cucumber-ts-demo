/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then } from '@cucumber/cucumber'
import login from '../pages/login.page'
import home from '../pages/home.page'
import base from '../actions/base.action'
import checkout from '../pages/checkout.page'

const basePage = new base(global.page)

Given('User logged in to the page', async function () {
  await global.page.goto(login.pageURL)
  await basePage.typeInTextField(login.userNameFieldSelector, login.userName)
  await basePage.typeInTextField(login.passwordFieldSelector, login.password)
  await basePage.clickOnElement(login.loginButtonSelector)
})

Given('User adds backpack to the cart', async function () {
  await basePage.clickOnElement(home.backpackAddButtonSelector)
})

Given('User adds bikelight to the cart', async function () {
  await basePage.clickOnElement(home.bikeLightAddButtonSelector)
})

When('User clicks the cart button', async function () {
  await basePage.clickOnElement(home.cartButtonSelector)
})

Then('Cart page should appear', async function () {
  await basePage.validateTextInElement(
    checkout.pageTitleSelector,
    checkout.cartPageValidationText,
  )
})

When('User clicks the checkout button', async function () {
  await basePage.clickOnElement(checkout.checkoutButtonSelector)
})

Then('Checkout page should appear', async function () {
  await basePage.validateTextInElement(
    checkout.pageTitleSelector,
    checkout.checkoutPageValidationText,
  )
})

Given('User types the first name', async function () {
  await basePage.typeInTextField(
    checkout.firstNameFieldSelector,
    checkout.firstName,
  )
})

Given('User types the last name', async function () {
  await basePage.typeInTextField(
    checkout.lastNameFieldSelector,
    checkout.lastName,
  )
})

Given('User types the zip code', async function () {
  await basePage.typeInTextField(
    checkout.postalCodeFieldSelector,
    checkout.zipCode,
  )
})

Given('User clicks the continue button', async function () {
  await basePage.clickOnElement(checkout.continueButtonSelector)
})

When('User clicks the finish button', async function () {
  await basePage.clickOnElement(checkout.finishButtonSelector)
})

Then('Order confirm text should appear', async function () {
  await basePage.validateTextInElement(
    checkout.orderConfirmTextSelector,
    checkout.orderConfirmText,
  )
})
