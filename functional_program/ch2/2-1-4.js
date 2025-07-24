function impureSquare(n) {
  const result = n * n;
  console.log(`인풋: ${n}, 아웃풋: ${result}`); // 콘솔 출력(부수)
  return result;
}

impureSquare(2);
impureSquare(4);
