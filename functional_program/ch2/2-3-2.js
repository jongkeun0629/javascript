const composeMany =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const splitWords = (str) => str.split(" ");
const firstWord = (arr) => arr[0];
const exclaim = (word) => word + "!";

const getFirstExclaimed = composeMany(exclaim, firstWord, splitWords);

console.log(getFirstExclaimed("아오 졸려")); // 아오!
