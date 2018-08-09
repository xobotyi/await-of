/**
 * Returns the promise that will be resolved with an array of signature `[results, error]`
 *
 * @param {Promise} promise Promise to handle
 * @return {Promise<Array>} Array with `[results, error]`
 */
export default function of(promise) {
    return Promise.resolve(promise)
            .then((results) => [results])
            .catch((err) => {
                if (!err) {
                    const error = new Error("Rejection with empty value");
                    error.originalValue = err;

                    err = error;
                }

                return [undefined, err];
            });
}
