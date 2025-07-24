const compose = (f, g) => (x) => f(g(x));

const trim = (str) => str.trim();
const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";
const repeat = (str) => str + " " + str;

const shout = compose(toUpper, trim);
console.log(shout("     hello world     ")); // HELLO WORLD

const exclaimRepeat = compose(exclaim, repeat);
console.log(exclaimRepeat("hello")); // hello hello!

const repeatExclaim = compose(repeat, exclaim);
console.log(repeatExclaim("hello")); // hello! hello!
