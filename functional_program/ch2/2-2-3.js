const nums = [1, 2, 3];
const with4 = nums.concat(4);
const with5 = [...with4, 5];

const with6 = [6, ...with5];

const with7 = [7, ...with6, 7];

console.log(nums);
console.log(with4);
console.log(with5);
console.log(with6);
console.log(with7);
