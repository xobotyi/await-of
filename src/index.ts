type Unpromisify<T> = T extends Promise<infer R> ? R : T
type ReturnType<T> = T extends (...args: any[]) => infer T ? Unpromisify<T> : any

export function of<T> (promise: Promise<ReturnType<T>>): Promise<[undefined, Error] | [ReturnType<T>]> {
  return Promise.resolve(promise)
    .then((r: ReturnType<T>): [ReturnType<T>] => [r])
    .catch(
      (e: Error | undefined | null): [undefined, Error] => {
        if (e === undefined || e === null) {
          return [undefined, new Error("Rejection with empty value")];
        }

        return [undefined, e];
      }
    );
}

export default of;
