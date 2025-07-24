let myProfile = {
  name: "jongkeun",
  age: 26,
  isRich: false,
};

console.log(myProfile);
console.log(typeof myProfile); // object

let stringifiedMyProfile = JSON.stringify(myProfile); // 직렬화
console.log(stringifiedMyProfile);
console.log(typeof stringifiedMyProfile); // string

let parsedMyProfile = JSON.parse(stringifiedMyProfile);
console.log(parsedMyProfile);
console.log(typeof parsedMyProfile); // object
