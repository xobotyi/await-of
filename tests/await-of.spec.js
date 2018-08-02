import of from "./../src/await-of";

describe("await-of test",
         () => {
             it("should return result as first item", async () => {
                 const result = "Hello world!";
                 const [data, err] = await of(Promise.resolve(result));

                 expect(err).toBeUndefined();
                 expect(data).toEqual(result);
             });

             it("should return rejection result as second item", async () => {
                 const result = "Hello world!";
                 const [data, err] = await of(Promise.reject(result));

                 expect(data).toBeUndefined();
                 expect(err).toEqual(result);
             });

             it("should return thrown error as second item", async () => {
                 const error = new Error();
                 const promise = new Promise((resolve, reject) => {
                     throw error;
                 });
                 const [data, err] = await of(promise);

                 expect(data).toBeUndefined();
                 expect(err).toEqual(error);
             });
         });
