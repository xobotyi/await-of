/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/ban-ts-ignore */
import { of } from '../src';

describe('await-of', () => {
  it('should return resolve result as first array`s item', async () => {
    const [res, err] = await of(Promise.resolve('Hello world!'));

    expect(err).toBeUndefined();
    expect(res).toBe('Hello world!');
  });

  it('should return rejection result as second array`s item', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    const [res, err] = await of(Promise.reject('Hello world!'));

    expect(res).toBeUndefined();
    expect(err).toBe('Hello world!');
  });

  it('should return unhandled error as second array`s item', async () => {
    const [res, err] = await of(
      new Promise(() => {
        throw new Error('Unhandled error!');
      }),
    );

    expect(res).toBeUndefined();
    expect(err).toBeInstanceOf(Error);
    expect(err!.message).toBe('Unhandled error!');
  });

  it('should handle empty/null value rejection', async () => {
    const [res, err] = await of(Promise.reject());

    expect(res).toBeUndefined();
    expect(err).toBeInstanceOf(Error);
    expect(err!.message).toBe('Rejection with empty value');
  });

  it('should handle empty/null value rejection', async () => {
    const [res, err] = await of(Promise.reject());

    expect(res).toBeUndefined();
    expect(err).toBeInstanceOf(Error);
    expect(err!.message).toBe('Rejection with empty value');
  });

  it('should not throw on non-thenables', async () => {
    // @ts-ignore
    const [data, err] = await of('Hello world!');

    expect(err).toBeUndefined();
    expect(data).toEqual('Hello world!');
  });

  it('should not throw on nulls', async () => {
    // @ts-ignore
    const [data, err] = await of(null);

    expect(err).toBeUndefined();
    expect(data).toBeNull();
  });
});
