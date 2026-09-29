// task:8 two sum algorithm
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

// task:9 memoized function decorator
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// task:10 asynchronous fetch timeout wrapper
function fetchWithTimeout(url, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request Timed Out")), ms);
  });
  return Promise.race([fetch(url), timeout]);
}


console.log("Task 08:", twoSum([2, 7, 11, 15], 9)); // [0,1]

const slowFactorial = (n) => (n <= 1 ? 1 : n * slowFactorial(n - 1));
const memoFactorial = memoize(slowFactorial);
console.log("Task 09:", memoFactorial(5), memoFactorial(5)); 


// case A: real public API with a generous timeout -> should succeed
fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 5000)
  .then(res => res.json())
  .then(data => console.log("Task 10 (success case):", data))
  .catch(err => console.log("Task 10 (success case) error:", err.message));

// case B: same API but a tiny timeout -> should trigger "Request Timed Out"
fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 1)
  .then(res => console.log("Task 10 (timeout case): unexpectedly succeeded"))
  .catch(err => console.log("Task 10 (timeout case):", err.message));

module.exports = {
  twoSum,
  memoize,
  fetchWithTimeout,
};
