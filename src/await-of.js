export default function of(promise) {
    return promise
            .then(ret => [ret])
            .catch(err => [undefined, err]);
}
