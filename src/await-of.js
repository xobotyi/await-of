/**
 * Returns the promise that will be resolved with an array of signature `[results, error]`
 *
 * @param {Promise} promise Promise to handle
 * @return {Promise<Array>} Array with `[results, error]`
 */
export default function of(promise) {
    return promise
            .then((ret) => [ret])
            .catch((err) => [undefined, err]);
}
