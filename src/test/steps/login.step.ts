import { Given, Then, When } from '@cucumber/cucumber'

Given('User navigates to the application', async function () {
  console.log('implementation done')
})

Given('User click on the login link', () => {
  console.log('implementation pending')
})

Given('User enters the username {string}', (s: string) => {
  console.log('implementation pending')
})

When('Login should be unsuccessful', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('User clicks on the login button', () => {
  // Write code here that turns the phrase above into concrete actions
})

Given('User enters the password {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('Login should be successful', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('User clicks on the login button', () => {
  // Write code here that turns the phrase above into concrete actions
})

Given('User enters the password as {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})

Given('User enters the username as {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})
