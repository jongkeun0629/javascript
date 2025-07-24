// 클로징. 변수 사용하지만 함수 내에서 선언
function createAdder() {
  let total = 0;

  return function (a, b) {
    total += a + b;
    return total;
  };
}

const add = createAdder();
console.log(add(2, 3));
console.log(add(2, 3));

const add2 = createAdder();
console.log(add2(2, 3));
console.log(add2(2, 3));
