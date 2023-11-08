import { Given, When, Then } from '@cucumber/cucumber'
import { Browser, Page } from '@playwright/test'
import {
  createBrowserContext,
  createPageContext,
} from '../../config/test.config'

let page: Page
let browser: Browser

Given('User navigates to the login page', async function () {
  page = await createPageContext()
  browser = await createBrowserContext()
  await page.goto('https://www.saucedemo.com/')
})

Given('User types the username as {string}', async function (userName) {
  await page.locator('#user-name').fill(userName)
})

Given('User types the password as {string}', async function (password) {
  await page.locator('#password').fill(password)
})

When('User clicks the login button', async function () {
  await page.locator('#login-button').click()
})

Then('Login should be successful', async function () {
  const loginValidationText = await page.locator('.app_logo').textContent()
  console.log('Text: ' + loginValidationText + ' observed. Login Successful!')
  await browser.close()
})
