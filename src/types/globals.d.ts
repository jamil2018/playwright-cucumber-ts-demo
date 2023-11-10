/* eslint-disable no-var */
import {
  BrowserContext,
  ChromiumBrowser,
  FirefoxBrowser,
  Page,
  WebKitBrowser,
} from '@playwright/test'

declare global {
  var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser
  var page: Page
  var context: BrowserContext
}

export {}
