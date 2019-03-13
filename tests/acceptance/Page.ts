import { ElementHandle, Page } from 'puppeteer';

export abstract class BasePage {
  public document!: Page;
  abstract get url(): string;

  constructor() {
    this.document = page;
  }

  public async abrir(): Promise<void> {
    await page.goto(`${process.env.APP_URL}${this.url}`);
  }

  public async getElementText(selector: string): Promise<string | null>{
    return await this.document.$eval(selector, (el: any) => el.textContent);
  }

  public async getElement(selector: string): Promise<ElementHandle<Element>> {
    const element = await this.document.$(selector);

    if (element != null) {
      return element as ElementHandle<Element>;
    } else {
      throw new Error(`Não foi possível encontrar o elemento com o seletor: ${selector}`);
    }
  }

  public async getElements(selector: string) {
    const elements = await this.document.$$(selector);

    if (elements.length > 0) {
      return elements as Array<ElementHandle<Element>>;
    } else {
      throw new Error(`Não foi possível encontrar elementos com o seletor: ${selector}`);
    }
  }

  public async getElementFromElement(
    element: ElementHandle<Element>, selector: string) {
      const elementFromElement = await element.$(selector);

      if (elementFromElement != null) {
        return elementFromElement as ElementHandle<Element>;
      } else {
        throw new Error(`Não foi possível encontrar o elemento com o seletor ${selector} no elemento`);
      }
  }

  public async getElementsFromElement(
    element: ElementHandle<Element>, selector: string) {
      const elementsFromElement = await element.$$(selector);

      if (elementsFromElement.length > 0) {
        return elementsFromElement as Array<ElementHandle<Element>>;
      } else {
        throw new Error(`Não foi possível encontrar elementos com o seletor ${selector} no elemento`);
      }
  }

  public async isChecked(element: ElementHandle<Element>, selector: string) {
    const radioButton = await this.getElementFromElement(element, selector);
    const isChecked = await radioButton.getProperty('textContent');

    return await isChecked.jsonValue() == 'radio_button_checked' ? false : true;
  }

  public async elementClick(element: ElementHandle<Element>, timeForWait: number = 500) {
    try {
      await element.click();
      await page.waitFor(timeForWait);
    } catch (error) {
      throw new Error('Não foi possível clicar no elemento.');
    }
  }
}
