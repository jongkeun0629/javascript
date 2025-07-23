function createPerson(firstName, lastName) {
  return {
    // key: value 맞추면 생략 가능
    firstName,
    lastName,
  };
}

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function changeLastName(person, newLastName) {
  // ...person: person 펼쳐서 값만 나열
  return { ...person, lastName: newLastName };
}

const p2 = createPerson("종근", "이");
console.log(getFullName(p2));

const p3 = changeLastName(p2, "김");
console.log(getFullName(p2));
console.log(getFullName(p3));
