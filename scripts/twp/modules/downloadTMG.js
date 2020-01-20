import { focusKeyPress } from "../utils/helpers";
import { TMG_DOWNLOAD_SELECTOR, LICENSE_DOWNLOAD_SELECTOR } from "../config";

export const downloadTMG = async (page) => {
  // ======  Download TMG & License =============================
  await focusKeyPress(page, TMG_DOWNLOAD_SELECTOR, 'Enter')
  await focusKeyPress(page, LICENSE_DOWNLOAD_SELECTOR, 'Enter');
}

