'use strict';

/**
 * `preventXss`
 * Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.
 * @param {string} input - The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags.
 * @example <caption>Example usage of preventXss</caption>
 * const safe = '&lt;script&gt;&lt;/script&gt;';
 * const result = preventXss('<script></script>');
 * expect(result).toBe(safe);
 * @returns {string} Cleaned string that shouldn't run any javascript code if displayed on a webpage.
 */
const preventXss = (input) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = preventXss;