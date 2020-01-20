import {
  SAMSUNG_EMAIL,
  SAMSUNG_PW,
  SAMSUNG_PORTAL_URL,
  EMAIL_INPUT_ID,
  PW_INPUT_ID,
  LOGIN_BUTTON_ID
} from "../config";
import { loadURL, focusKeyPress, focusTypeText } from "../utils/helpers";

export const login = async page => {
  const email = SAMSUNG_EMAIL;
  const password = SAMSUNG_PW;

  if (email && password) {
    await loadURL(page, SAMSUNG_PORTAL_URL);

    // ====== navigates TO portal login ======================
    await focusKeyPress(page, "button", "Enter", true);
    // ====== inputs account EMAIL ===========================
    await focusTypeText(page, EMAIL_INPUT_ID, SAMSUNG_EMAIL);
    // ====== inputs account PASSWORD ========================
    await focusTypeText(page, PW_INPUT_ID, SAMSUNG_PW);
    // ====== press Enter to sign in =========================
    await focusKeyPress(page, LOGIN_BUTTON_ID, "Enter", true);
  } else {
    console.log(`email or password not found: `, email, password);
  }
};
