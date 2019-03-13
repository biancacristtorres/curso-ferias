declare const browser: import ('puppeteer').Browser;
declare const page: import ('puppeteer').Page;
declare const urlBase: string;

declare namespace NodeJS {
  interface Global {
    browser: import ('puppeteer').Browser;
    page: import ('puppeteer').Page;
    urlBase: string;
  }
}
