import { Given, Then, When } from '@cucumber/cucumber'

Given('User navigates to the application', async function () {
  console.log('implementation done')
})

Given('User click on the login link', async function () {
  console.log('implementation pending')
})

Given('User enters the username {string}', async function (s: string) {
  console.log('implementation pending', s)
})

When('Login should be unsuccessful', async function () {
  // Write code here that turns the phrase above into concrete actions
})

When('User clicks on the login button', async function () {
  // Write code here that turns the phrase above into concrete actions
})

Given('User enters the password {string}', function (s: string) {
  // Write code here that turns the phrase above into concrete actions
  console.log('implementation pending', s)
})

Then('Login should be successful', async function () {
  // Write code here that turns the phrase above into concrete actions
})

When('User clicks on the login button', function () {
  // Write code here that turns the phrase above into concrete actions
})
