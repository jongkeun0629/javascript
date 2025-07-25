const data = [-3, 7, -1, 0, 5];

const result = data
  .filter((n) => n >= 0) // [7, 0, 5]
  .map((n) => Math.abs(n)) // [7, 0, 5]
  .sort((a, b) => a - b); // [0, 5, 7]

const result2 = data
  .map(Math.abs) // [3, 7, 1, 0, 5]
  .filter((n) => n !== 0) // [3, 7, 1, 5]
  .sort((a, b) => a - b); // [1, 3, 5, 7]

console.log(result); // [0, 5, 7]
console.log(result2); // [1, 3, 5, 7]
