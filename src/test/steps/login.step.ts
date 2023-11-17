/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then } from '@cucumber/cucumber'
import login from '../pages/login.page'
import home from '../pages/home.page'
import base from '../actions/base.action'
import { config } from '../../config/test.config'
let user = require('../fixtures/test_data.json');
const basePage = new base(global.page)

Given('User logged in to the page', async function () {
  await global.page.goto(config.baseURL)
  await basePage.typeInTextField(login.userNameFieldSelector, user.userName)
  await basePage.typeInTextField(login.passwordFieldSelector, user.password)
  await basePage.clickOnElement(login.loginButtonSelector)
  console.log('this is a logged data: ' + user.password)
})

Then('Header text observed', async function () {
  await basePage.validateTextInElement(home.headerTextSelector, home.headerText)
  console.log('Text: ' + home.headerText + ' observed. Login Successful!')
})
