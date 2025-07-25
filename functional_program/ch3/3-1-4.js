function sumArray(arr) {
  if (arr.length === 0) return 0;
  // 첫 요소(head) + 나머지(tail) 배열 합계
  const [head, ...tail] = arr;
  return head + sumArray(tail);
}
console.log(sumArray([1, 2, 3, 4])); // 10
