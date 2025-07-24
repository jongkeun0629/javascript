const user = { name: "Jongkeun", age: 26 };

// age는 있어서 변경, isRich는 없어서 추가
const updated = { ...user, age: 25, isRich: false };

console.log(user); // { name: 'Jongkeun', age: 26 }
console.log(updated); // { name: 'Jongkeun', age: 25, isRich: false }
