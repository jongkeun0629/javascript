function IO(effect) {
  return {
    run: effect, // 로직을 나중에 실행하겠다.
    map(fn) {
      return IO(() => fn(effect)); // Functor. boxing
    },
    flatMap(fn) {
      return fn(effect()); // Monad. unboxing
    },
  };
}

function getRandom() {
  return Math.random();
}

const getRandomIO = IO(() => Math.random());

// 참조 투명성 유지. 같은 객체를 참조
const rand1IO = getRandomIO;
const rand2IO = getRandomIO;

// run(): 로직 실행. 랜덤 값 부여
const rand1 = rand1IO.run();
const rand2 = rand2IO.run();

console.log(rand1); // 랜덤 값
console.log(rand2); // 랜덤 값
console.log(rand1IO === rand2IO); // true. 같은 객체
console.log(rand1 === rand2); // false. 다른 값
