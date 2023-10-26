// string.js

let str1 = "Hello"; // 기본 데이터 타입
let str2 = new String("Hello"); // 객체

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값만 비교
console.log(str1 === str2); // 값&타입 비교

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.    ".trim();
console.log(result, ' 문자갯수 : ', result.length);

// trim(), trimStart(), trimEnd()
// replace(), split(), slice(), substring(), substr()
// toString(), indexOf(), lastIndexOf(), charAt(), includes(), concat()
result = "Hello, World, Nice, World".replace(',', '.');  // ,를 . 으로 바꾸는데 첫번째 값만 바꿈
console.log(result);

result = "Hello, World, Nice, World".replace(/\s/g, ''); // /값/ 정규표현식 객체  g는 문자열 전체
console.log(result);
