export enum Browsers {
  CHROMIUM = 'chromium',
  WEBKIT = 'webkit',
  FIREFOX = 'firefox',
}

export const config = {
  baseURL: 'https://www.saucedemo.com/',
  browserOptions: {
    headless: false,
  },
  browser: Browsers.CHROMIUM,
}
