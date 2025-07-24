let total = 0;

function impureAdd(a, b) {
  total += a + b; // total = total + a + b; 외부 변수를 변경(부수 효과)
  return total;
}

console.log(impureAdd(2, 3)); // 5
console.log(impureAdd(2, 3)); // 10
