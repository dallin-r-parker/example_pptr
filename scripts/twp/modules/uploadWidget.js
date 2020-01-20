import { TERMS_CONDITION_SELECTOR } from "../config";
import { click, upload } from "../utils/helpers";

export const uploadWidget = async page => {
  // Accept Terms & Conditions ==========================
  await click(page, TERMS_CONDITION_SELECTOR);
  await upload(page); // maybe accept a WORK_SPACE_PATH
};
