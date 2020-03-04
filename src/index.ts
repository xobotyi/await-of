export type AwaitOfReturnType<T> = Readonly<[T, Error?]>;

export function of<T = any>(promise: Promise<T>): Promise<AwaitOfReturnType<T>> {
  return Promise.resolve(promise)
    .then((r: T): AwaitOfReturnType<T> => [r])
    .catch(
      (e: Error | undefined | null): AwaitOfReturnType<T> => {
        if (e === undefined || e === null) {
          return [e as any, new Error("Rejection with empty value")];
        }

        return [undefined as any, e];
      }
    );
}

export default of;
