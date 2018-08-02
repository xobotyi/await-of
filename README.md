<h1 align="center">await-of</h1>
<p align="center">
    <a href="https://www.npmjs.com/package/await-of"><img src="https://img.shields.io/badge/npm-await--of-brightgreen.svg?style=flat-square" /></a>
    <a href="https://www.npmjs.com/package/await-of"><img src="https://img.shields.io/npm/v/await-of.svg?style=flat-square" /></a>
    <a href="https://www.npmjs.com/package/await-of"><img src="https://img.shields.io/npm/dt/await-of.svg?style=flat-square" /></a>
    <a href="https://www.npmjs.com/package/await-of"><img src="https://img.shields.io/travis/xobotyi/await-of.svg?style=flat-square" /></a>
    <a href="https://www.codacy.com/app/xobotyi/await-of"><img src="https://img.shields.io/codacy/grade/873d863f35924f1cbc15cb3648df42d0.svg?style=flat-square"/></a>
    <a href="https://www.codacy.com/app/xobotyi/await-of"><img src="https://img.shields.io/codacy/coverage/873d863f35924f1cbc15cb3648df42d0.svg?style=flat-square"/></a>
    <a href="https://www.npmjs.com/package/await-of"><img src="https://img.shields.io/npm/l/await-of.svg?style=flat-square" /></a>
</p>

## About
ES7 `async/await` gives to developers ability to write asynchronous code that look like synchronous. But under the hood it is still just a sugar on top of the ES6 `Promise`.  
You can write code that looks clean, but only unless you have to catch errors. To catch thrown error or handle the promise's rejection you have to surround it with `try-catch` block or fallback to pure promises and from that moment cleanliness of your code is over.  
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
import of from "await-of";

let a = async () => {
    const [data, error] = await of(MyAwesomeAsyncFunction());
    
    if (error) throw new Error('Something amiss happened!');
    
    return data;
}
```
There is no modifications needed in function/promise you want to await - just pass it to the `of()` and whole the magic will be done.

## Installation
```bash
npm i --save await-of
```

## Usage
```javascript
import of from "await-of";

async function someAsyncStuff(){
    let error, data;
    
    // if we don't want to handle error
    [data] = await of(Promise.reject("ERROR!"));
    console.log(data); // undefined
    
    // if promise was rejected - it's rejection value will be treated as error
    [, error] = await of(Promise.reject("ERROR!"));
    console.log(error); // ERROR!
    
    // or if promise has any uncaught errors it'll catch them too!
    [, error] = await of(new Promise(()=>{throw new TypeError('ERROR!')}));
    console.log(error.message); // ERROR!
}
```

## Tests
```bash
# install dependencies if you haven't yet
npm install
npm run test
```

## Coverage
```bash
# install dependencies if you haven't yet
npm install
npm run test:coverage
```
