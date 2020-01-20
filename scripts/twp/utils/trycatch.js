
/**
 *
 * Higher-order function for try catch
 * @author Dallin Parker <dallin.parker@mlb.com>
 *
 */

export const tryCatch = async (func, description = "") => {
  try {
    return await func();
  } catch (error) {
    throw new Error(`
        Error occured: ${description} \n
        Error Message: ${error}
        `);
  }
};
