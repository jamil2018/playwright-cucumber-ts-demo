import { Given, When, Then } from '@cucumber/cucumber'

Given('User navigates to the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/')
})

Given('User types the username as {string}', async function (userName) {
  await this.page.locator('#user-name').fill(userName)
})

Given('User types the password as {string}', async function (password) {
  await this.page.locator('#password').fill(password)
})

When('User clicks the login button', async function () {
  await this.page.locator('#login-button').click()
})

Then('Login should be successful', async function () {
  const loginValidationText = await this.page.locator('.app_logo').textContent()
  console.log('Text: ' + loginValidationText + ' observed. Login Successful!')
})
