# Promise in JS

**Promise** is nothing but a proxy object that represents the state of execution of an **async code**. It is foundation of asynchronous programming in javascript.

Promise handles the async code is the following way:- 

According to promise object a async can have either of three states.

 1.  **`pending`**: loaded in stack but not completed yet
 2. **`fulfilled`**: has completed the execution successfully without any errors
 3. **`rejected`**: has failed during execution caused by an error

Syntax of Promise: 

Promise objects take two callbacks as arguments to the constructer called resolved and reject, which is called to either resolve or reject promise.

Consider the example below:- 
```
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error('Alarm delay must not be negative'));
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

The function alarms returns a promise which is resolved at condition i.e, if **`delay >= 0`**.  

Other methods in promise: 
1.  [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): This methods takes an array of promises resolves with a single promise with an **array of all resolved value of other promises**, only when **all the promises gets fulfilled**.
2.  [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled): This methods takes an array of promises resolves with a single promise with an **array of all resolved or rejected value of other promises**. 
3.  [`Promise.any()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any): takes an array of promises resolves with a single promise with **any resolved value of promises**. 
4.  [`Promise.prototype.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch): This takes callback which is executed when the promise gets **rejected**.
5.  [`Promise.prototype.finally()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally): This takes callback which is executed once promises completes executing.
6.  [`Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race): takes an array of promises resolves with a single promise with **resolved value of promise executed the **.
7.  [`Promise.prototype.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then): This takes callback which is executed when the promise gets **fulfilled**.
8.   [`Promise.reject()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject): rejects the promises with error value.
9.  [`Promise.resolve()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve): fulfills the promises with success value.

Refer to the link for more info on the above promise methods.  
