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

export const createBrowserContext = async (): Promise<Browser> => {
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

export const createPageContext = async (): Promise<Page> => {
  const browser = await createBrowserContext()
  const page = await browser.newPage()
  return page
}
