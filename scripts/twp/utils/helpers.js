import path from 'path';
console.log(`HELPER DOWNLOAD PATH: ${__dirname}/../downloads/`);
console.log('DIR NAME: ',__dirname)
console.log(`FILENAME: ${__filename}`, );
const pathObj = path.parse(__filename)
console.log(`PATH OBJ: ${JSON.stringify(pathObj)}`)
import puppeteer from "puppeteer";
import { tryCatch } from "./trycatch";
import {
  USB_TOOL_URL,
  USB_TOOL_SELECTOR,
  waitUntil,
  FILE_CHOOSER_BTN
} from "../config";
import { uploadWidget } from "../modules/uploadWidget";
import { downloadTMG } from "../modules/downloadTMG";

export const launch = async config => {
  return await tryCatch(async () => {
    return await puppeteer.launch(config);
  });
};

export const newPage = async browser => {
  return await tryCatch(async () => await browser.newPage());
};

export const loadURL = async (page, url) => {
  return await tryCatch(async () => {
    await page.goto(url, waitUntil);
  });
};

// this is necessary when running headless -> TODO: might want to set up a check?
export const setUserAgent = async (page, UA) => await page.setUserAgent(UA);

export const initCDP = async page => {
  if (page.url() === USB_TOOL_URL) {
    const client = await page.target().createCDPSession();
    // const downloadPath = path.join(__dirname, '../downloads/');
    const downloadPath = path.normalize(`${__dirname}/../downloads/`)

    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath
    });
    console.log(`setting Download Behavior: `, )
    await uploadWidget(page);
    await downloadTMG(page);
  }
};

export const click = async (page, elm) => {
  return await tryCatch(async () => {
    await page.waitForSelector(elm);
    await page.click(elm);
  });
};

export const typeText = async (page, text) => {
  return await tryCatch(async () => await page.keyboard.type(text));
};

export const focus = async (page, elm) => {
  return await tryCatch(async () => {
    await page.waitForSelector(elm);
    await page.focus(elm);
  });
};

export const pressKey = async (page, key) => {
  return await tryCatch(async () => await page.keyboard.press(key));
};

export const focusKeyPress = async (page, elm, key, waitNav = false) => {
  return await tryCatch(async () => {
    await focus(page, elm);
    await pressKey(page, key);
    if (waitNav) {
      await page.waitForNavigation(waitUntil);
    }
  });
};

export const focusTypeText = async (page, elm, text) => {
  return await tryCatch(async () => {
    await focus(page, elm);
    await typeText(page, text);
  });
};

export const initPackagingWidget = async page => {
  return await tryCatch(async () => {
    await focusKeyPress(page, USB_TOOL_SELECTOR, "Enter", true);
  });
};

export const upload = async page => {
  return await tryCatch(async () => {
    await page.waitForSelector(FILE_CHOOSER_BTN);
    await page.waitFor(1000);

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      click(page, FILE_CHOOSER_BTN)
    ]);
    await fileChooser.accept([
      `${__dirname}/../tizen_builds/MLBTV_9.3.3_QA.wgt`
    ]);
  });
};
