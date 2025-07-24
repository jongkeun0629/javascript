class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  changeLastName(newLastName) {
    this.lastName = newLastName;
  }
}

// let 변수, const 상수

const person = new Person("흥민", "손");
console.log(person.getFullName());
person.changeLastName("김");
console.log(person.getFullName());
