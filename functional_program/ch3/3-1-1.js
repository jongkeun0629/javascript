function factorial(n) {
  // 음수 입력 예외 처리
  if (n < 0) {
    throw new Error("음수는 팩토리얼 연산을 수행할 수 없습니다.");
  }

  console.log(`팩토리얼 진입: ${n}`);

  // 기저 조건: 0 또는 1일 때 1 반환
  if (n === 0 || n === 1) {
    console.log("1 반환");
    return 1;
  }

  // 재귀 호출: n * (n-1)!
  const result = n * factorial(n - 1);
  console.log(`${n}으로 부터 ${result}를 반환`);
  return result;
}

// 테스트
console.log(factorial(5)); // 120
// console.log(factorial(1)); // 1
console.log(factorial(-1)); // 예외 처리
