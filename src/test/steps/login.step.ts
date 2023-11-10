/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then } from '@cucumber/cucumber'
import login from '../pages/login.page'
import home from '../pages/home.page'
import base from '../actions/base.action'

const basePage = new base(global.page)

Given('User navigates to the login page', async function () {
  await global.page.goto(login.pageURL)
})

Given('User types the correct username', async function () {
  await basePage.typeInTextField(login.userNameFieldSelector, login.userName)
})

Given('User types the correct password', async function () {
  await basePage.typeInTextField(login.passwordFieldSelector, login.password)
})

When('User clicks the login button', async function () {
  await basePage.clickOnElement(login.loginButtonSelector)
})

Then('Header text observed', async function () {
  await basePage.validateTextInElement(home.headerTextSelector, home.headerText)
  console.log('Text: ' + home.headerText + ' observed. Login Successful!')
})
