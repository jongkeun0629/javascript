function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

repeat(() => console.log("안녕하세요!"), 1);
repeat(() => console.log("반갑습니다!"), 2);
