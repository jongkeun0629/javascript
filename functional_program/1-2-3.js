function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const add1 = (x) => x + 1;
const double2 = (x) => x * 2;

const add1ThenDouble2 = compose(double2, add1);
console.log(add1ThenDouble2(3));

const double2Thenadd1 = compose(add1, double2);
console.log(double2Thenadd1(3));
