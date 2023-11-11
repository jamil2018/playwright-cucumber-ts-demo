import { Page, expect } from '@playwright/test'

export default class base {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  /**
   * Action: Fill the text field with provided text
   *
   * @param txtField    selector of the text field
   * @param text        text to be typed
   */
  async typeInTextField(txtField: string, text: string) {
    await global.page.locator(txtField).fill(text)
  }

  /**
   * Action: Click on the provided element
   *
   * @param clickElement    selector of the element to be clicked
   */
  async clickOnElement(clickElement: string) {
    await global.page.locator(clickElement).click()
  }

  /**
   * Action: Validate any text in any elemment
   *
   * @param element     selector of the text containing element
   * @param text        text to be validate
   */
  async validateTextInElement(element: string, text: string) {
    const validationText = await global.page.locator(element).textContent()
    expect(validationText).toContain(text)
  }
}
