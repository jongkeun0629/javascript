// 원본 multiply(a,b)
function multiply(a, b) {
  return a * b;
}

// 부분 적용용 helper
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

// multiplyBy(n) 구현
const multiplyBy = (n) => partial(multiply, n);

// 사용 예
const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(double(7)); // 14
console.log(triple(5)); // 15
