/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:

promise1 and promise2 are promises that resolve with a number
*/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

//! 利用Promise.all 跟 await
var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
};

//! 只利用Promise.all、不用 await
var addTwoPromises2 = function (promise1, promise2) {
  const answer = Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
    const [value1, value2] = values;
    return value1 + value2;
  });

  return answer;
};

//! 都不用 promise.all 跟 await 的解法
var addTwoPromises3 = function (promise1, promise2) {
  const answer = promise1.then((value1) => {
    return promise2.then((value2) => {
      return value1 + value2;
    });
  });

  return answer;
};

addTwoPromises2(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
).then((answer) => console.log(answer));

const haha = async () => {
  const result = await addTwoPromises3(
    new Promise((resolve) => setTimeout(() => resolve(10), 20)),
    new Promise((resolve) => setTimeout(() => resolve(12), 60))
  );
  console.log(result);
};

haha();

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
