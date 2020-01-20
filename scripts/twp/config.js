require("dotenv").config();

// the "waitUntil: networkidel" ensures the page is loaded fully by waiting until there are no more network requests for at least 500ms
export const waitUntil = { waitUntil: "networkidle0" };
// SELLER PORTAL LOGIN CREDENTIALS ============================
export const SAMSUNG_EMAIL = process.env.SAMSUNG_EMAIL || null;
export const EMAIL_INPUT_ID = `#iptLgnPlnID`;

export const SAMSUNG_PW = process.env.SAMSUNG_PW || null;
export const PW_INPUT_ID = `#iptLgnPlnPD`;

export const LOGIN_BUTTON_ID = `#signInButton`;

// FIRST PAGE: PORTAL SIGN IN ====================================
export const SAMSUNG_PORTAL_URL = `https://seller.samsungapps.com/tv/portal/main`;

// POPUP PAGE URL ======================================================
export const USB_TOOL_URL = `http://54.88.78.140/APPDRM_SIGN/index.php`
export const USB_TOOL_SELECTOR = `#usbDemo > div > a`;

export const CHROME_79_USER_AGENT = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`;

export const TERMS_CONDITION_SELECTOR = `input[id=USBagree]`;
export const FILE_CHOOSER_BTN = `button[id=fileUpload]`
export const TMG_DOWNLOAD_SELECTOR = `span[id=tmgDown] > a`;
export const LICENSE_DOWNLOAD_SELECTOR = `span[id=licenseDown] > a`;

export const launchConfig = {
  headless: true,
  devtools: false,
  defaultViewport: null,
  args: ["--window-size=1920,1170", "--window-position=0,0"]
}
