// task_1 reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// task_2 fizzBuzz scenario
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}

// task_3: find the largest number
function findMax(arr) {
  return Math.max(...arr);
}

console.log("Task 01:", reverseString("hello"));   
console.log("Task 02:", fizzBuzz(15));              
console.log("Task 03:", findMax([1, 5, 8, 3]));     

module.exports = {
  reverseString,
  fizzBuzz,
  findMax,
};
