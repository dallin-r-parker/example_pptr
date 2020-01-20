import { init } from "./utils/init";
import { login } from "./modules/login";
import { initPackagingWidget } from "./utils/helpers";
import { launchConfig } from "./config";

(async () => {
  const [page, browser] = await init(launchConfig);

  await login(page);
  await initPackagingWidget(page);
})();
