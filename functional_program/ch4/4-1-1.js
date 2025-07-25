const nums = [1, 2, 3, 4, 5];

const max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0]);

console.log(max);
