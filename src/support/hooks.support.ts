import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { Browsers, config } from '../config/test.config'
import { chromium, firefox, webkit } from '@playwright/test'

BeforeAll(async function () {
  console.log('starting browser')

  switch (config.browser) {
    case Browsers.CHROMIUM:
      global.browser = await chromium.launch(config.browserOptions)
      break
    case Browsers.FIREFOX:
      global.browser = await firefox.launch(config.browserOptions)
      break
    case Browsers.WEBKIT:
      global.browser = await webkit.launch(config.browserOptions)
      break
    default:
      global.browser = await chromium.launch(config.browserOptions)
  }
})

Before(async function () {
  console.log('creating new context and page')
  global.page = await global.browser.newPage()
  global.context = await global.browser.newContext()
})

After(async function () {
  console.log('closing context and page')
  await global.page.close()
  await global.context.close()
})
AfterAll(async function () {
  console.log('closing browser')
  await global.browser.close()
})
