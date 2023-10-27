// array.js

// 배열에는 여러가지 데이터 가능 정수, 문자열 , 객체 등
const arr1 = []
arr1.push(10);
arr1.push('ten');
arr1.push({name : "Hong", age : 20})

arr1.unshift(20); // unshift 배열의 가장 앞쪽에 넣기

console.log('배열의 크기 : ', arr1.length);
// arr1.length = 4; // 배열의 크기 지정 가능

arr1.pop();  // 뒤에서부터 하나씩 제거  
// arr1.shift();  // 앞에서부터 하나씩 제거

arr1.splice(1, 2, 50, 60); // 추가, 삭제, 수정 가능 시작위치, 제거할 요소의 갯수, 추가할 요소 ( ,0, )추가, ( ,1 , )수정, ( ,1)삭제


for (let ary of arr1) {
    console.log(ary);
}