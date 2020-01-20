import { launch, newPage, setUserAgent, initCDP } from "./helpers";
import { CHROME_79_USER_AGENT } from "../config";
import { tryCatch } from "./trycatch";

export const init = async (config) => {
  return await tryCatch(async () => {
    const browser = await launch(config);
    const page = await newPage(browser);

    
    await initCDP(page);
    
    await setUserAgent(page, CHROME_79_USER_AGENT);

    browser.on("targetcreated", async target => {
      const targetPage = await target.page();
      await initCDP(targetPage);
    });

    return [page, browser]
  }, 'initialize browser set up');
};
