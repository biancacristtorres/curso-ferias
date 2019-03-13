import {
  setDefaultTimeout,
  BeforeAll,
  AfterAll,
  Before,
  After,
  HookOptions,
} from 'cucumber';
import { launch, LaunchOptions } from 'puppeteer';

process.env.APP_URL = process.env.APP_URL || 'https://automacaocombatista.herokuapp.com';

const launchOptions: LaunchOptions = {
  headless: false,
  slowMo: 5,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  ignoreHTTPSErrors: true,
  dumpio: false,
};

const hooksOptions: HookOptions = {
  timeout: 25000,
};

const startBrowser = async () => {
  const browser = await launch(launchOptions);
  global.browser = browser;
};

const startUrlBase = async () => {
  global.urlBase = process.env.APP_URL as string;
};

BeforeAll(hooksOptions, async () => {
  await startBrowser();
  await startUrlBase();
  global.page = await browser.newPage();
  setDefaultTimeout(30000);
});

AfterAll(hooksOptions, async () => {
  if (global.browser) {
    await global.browser.close();
  }
});
