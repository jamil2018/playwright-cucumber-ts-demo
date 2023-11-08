import { Browser, Page, chromium, firefox, webkit } from '@playwright/test'

enum Browsers {
  CHROMIUM = 'chromium',
  WEBKIT = 'webkit',
  FIREFOX = 'firefox',
}

export const baseConfig = {
  baseURL: 'https://https://www.saucedemo.com/',
  browser: Browsers.CHROMIUM,
  browserOptions: {
    headless: false,
  },
}

const createBrowserContext = async (): Promise<Browser> => {
  switch (baseConfig.browser) {
    case Browsers.CHROMIUM:
      return chromium.launch(baseConfig.browserOptions)
    case Browsers.FIREFOX:
      return firefox.launch(baseConfig.browserOptions)
    case Browsers.WEBKIT:
      return webkit.launch(baseConfig.browserOptions)
    default:
      return chromium.launch(baseConfig.browserOptions)
  }
}

const createPageContext = async (browser: Browser): Promise<Page> => {
  return browser.newPage()
}

export const getBrowserAndPageContext = async () => {
  const browser = await createBrowserContext()
  const page = await createPageContext(browser)

  return {
    browser,
    page,
  }
}
