type AwaitOfReturnType<T> = Readonly<[T | undefined, Error?]>;

export function of<T = any>(promise: Promise<T>): Promise<AwaitOfReturnType<T>> {
  return Promise.resolve(promise)
    .then((result): Readonly<[T]> => [result])
    .catch(
      (err): Readonly<[undefined, Error]> => {
        if (typeof err === 'undefined') {
          err = new Error('Rejection with empty value');
        }

        return [undefined, err];
      },
    );
}
