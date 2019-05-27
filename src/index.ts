export type AWAIT_OF_RETURN_TYPE = [any?, Error?];

export function of(promise: Promise<any>): Promise<AWAIT_OF_RETURN_TYPE> {
  return Promise.resolve(promise)
    .then((r: any): AWAIT_OF_RETURN_TYPE => [r])
    .catch(
      (e: Error | undefined | null): AWAIT_OF_RETURN_TYPE => {
        if (e === undefined || e === null) {
          return [e, new Error("Rejection with empty value")];
        }

        return [undefined, e];
      }
    );
}

export default of;
