// task_4 count vowels
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// task_5 remove duplicates from array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// task_6: check for palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// task_7 title case a sentence
function titleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log("Task 04:", countVowels("javascript"));             
console.log("Task 05:", removeDuplicates([1, 2, 2, 3, 4, 4]));  
console.log("Task 06:", isPalindrome("racecar"));                
console.log("Task 07:", titleCase("i love coding"));             

module.exports = {
  countVowels,
  removeDuplicates,
  isPalindrome,
  titleCase,
};
