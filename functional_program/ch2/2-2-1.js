const user = { name: "Jongkeun", age: 26 };

const updated = Object.assign({}, user, { age: 25 });

console.log(user); // { name: 'Jongkeun', age: 26 }
console.log(updated); // { name: 'Jongkeun', age: 25 }
