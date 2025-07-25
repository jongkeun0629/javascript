const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const getUser = (obj) => obj.user;
const getName = (user) => user.name;
const getAge = (user) => user.age;

const data = { user: { name: "ljk", age: 26 } };

console.log(pipe(getUser, getAge)(data)); // 26
console.log(compose(getName, getUser)(data)); // ljk
