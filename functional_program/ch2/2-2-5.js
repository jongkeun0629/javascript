const original = {
  name: "jongkeun",
  address: {
    city: "서울",
    zip: "12345",
  },
};

// 깊은 복사. 직렬화 후 역직렬화
const shallow = JSON.parse(JSON.stringify(original));
shallow.name = "이종근";
console.log(original.name);
console.log(shallow.name);

shallow.address.city = "부산";
console.log(original.address.city);
console.log(shallow.address.city);
