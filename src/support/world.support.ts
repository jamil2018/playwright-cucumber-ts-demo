import { Browser, Page } from '@playwright/test'
import { getBrowserAndPageContext } from '../config/test.config'
import { After, Before, setWorldConstructor } from '@cucumber/cucumber'

class World {
  private browser: Browser | null
  private page: Page | null

  constructor() {
    this.browser = null
    this.page = null
  }

  async initialize() {
    const { browser, page } = await getBrowserAndPageContext()
    this.browser = browser
    this.page = page
  }

  async cleanup() {
    await this.browser?.close()
  }
}

setWorldConstructor(World)

Before(async function () {
  await this.initialize()
})

After(async function () {
  await this.cleanup()
})
