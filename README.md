<div align="center">

# await-of

await wrapper for easier errors handling without try-catch

[![NPM Version](https://flat.badgen.net/npm/v/await-of)](https://www.npmjs.com/package/await-of)
[![NPM Downloads](https://flat.badgen.net/npm/dm/await-of)](https://www.npmjs.com/package/await-of)
[![NPM Dependents](https://flat.badgen.net/npm/dependents/await-of)](https://www.npmjs.com/package/await-of)
[![Build](https://img.shields.io/github/workflow/status/xobotyi/await-of/CI?style=flat-square)](https://github.com/xobotyi/await-of/actions)
[![Coverage](https://flat.badgen.net/codecov/c/github/xobotyi/await-of)](https://app.codecov.io/gh/xobotyi/await-of)
[![Types](https://flat.badgen.net/npm/types/await-of)](https://www.npmjs.com/package/await-of)
[![Tree Shaking](https://flat.badgen.net/bundlephobia/tree-shaking/await-of)](https://bundlephobia.com/result?p=await-of)

</div>

---

<div align="center">❤️Please consider starring this project to show your love and support.🙌</div>

---


## About

ES7 `async/await` gives to developers ability to write asynchronous code that look like synchronous. But under the hood it is still just a sugar on top of the ES6 `Promise`.  
You can write code that looks clean, but only unless you have to catch errors. To catch thrown error or handle the promise's rejection you have to surround it with `try-catch` block or fallback to pure promises and from that moment visual purity of your code is over.  
But there is a solution!☀️  
I really like the way it's done in **Go**. It has no error throwing mechanism, but has a multi-value return and the common way to handle errors in Go is to return error as a last value, like so:

```go
data, err := someErrorFunc(someStuff)
if err != nil {
    return err
}
```

_But JavaScript has no multi-value return!_ - you would say. Sad, but true.  
But!  
It has a destructuring assignment and `await-of` gives you ability to do this:

```javascript
import { of } from "await-of";

async () => {
  let [res, err] = await of(axios.get("some.uri/to/get"));

  if (err) {
    // rethrow if its not an axios response error
    if (!err.response) {
      throw err;
    }

    res = err.response;
  }

  const { data, status = 0 } = res;

  console.log(data, status);
};
```

There is no modifications needed in function/promise you want to await - just pass it to the `of()` and whole the magic will be done.

## Installation

```bash
npm i --save await-of
```

## Usage

```javascript
import { of } from "await-of";

async function someAsyncStuff() {
  let error, data;

  // if we don't want to handle error
  [data] = await of(Promise.reject(new Error("ERROR!")));
  console.log(data); // undefined

  // if promise was rejected - it's rejection value will be treated as error
  [, error] = await of(Promise.reject(new Error("ERROR!")));
  console.log(error); // ERROR!

  // or if promise has any uncaught errors it'll catch them too!
  [, error] = await of(
    new Promise(() => {
      throw new TypeError("ERROR!");
    })
  );
  console.log(error.message); // ERROR!
}
```

## Tests

```bash
# install dependencies if you haven't yet
npm install
npm run test
```
