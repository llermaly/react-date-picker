/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */
export function callIfDefined(fn, ...args) {
  if (fn && typeof fn === 'function') {
    fn(...args);
  }
}

function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

export function safeMin(...args) {
  return Math.min(...args.filter(isValidNumber));
}

export function safeMax(...args) {
  return Math.max(...args.filter(isValidNumber));
}
