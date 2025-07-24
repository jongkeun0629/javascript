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
console.log(original.name); // jongkeun
console.log(shallow.name); // 이종근

shallow.address.city = "부산";
console.log(original.address.city); // 서울
console.log(shallow.address.city); // 부산
