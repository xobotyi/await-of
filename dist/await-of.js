"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = of;
/**
 * Returns the promise that will be resolved with an array of signature `[results, error]`
 *
 * @param {Promise} promise Promise to handle
 * @return {Promise<Array>} Array with `[results, error]`
 */
function of(promise) {
  return promise.then(function (ret) {
    return [ret];
  }).catch(function (err) {
    return [undefined, err];
  });
}