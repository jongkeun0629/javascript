const pipeMany =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const trim = (str) => str.trim();
const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();
const exclaim = (str) => str + "!";
const repeat = (str) => str + " " + str;

const pipe1 = pipeMany(trim, repeat, exclaim, repeat);
console.log(pipe1("hello"));

const pipe2 = pipeMany(toUpper, repeat, exclaim, repeat);
console.log(pipe2("hello"));
