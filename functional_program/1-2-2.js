function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const twice = makeMultiplier(2);
const thrice = makeMultiplier(3);

twice.language = "JavaScript";
thrice.language = "JavaScript";

console.log(twice(5)); // 10
console.log(thrice(5)); // 15
