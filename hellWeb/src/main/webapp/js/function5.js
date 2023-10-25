// function5.js

let sum1 = 0;
[10, 20, 30].forEach(function(num){
	sum1 += num;  // consumer : 매개값을 받아서 소진하고 반환값은 없음
})
console.log('forEach : ' + sum1);

sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary){
	//console.log(acc, item, idx);
	return acc + item; // function : 매개값을 소진, 반환값을 생성.
}, 0);  // 0으로 초기값 줌
console.log('reduce : ' + sum1);

function sum(a = 0, b = 0, ...args){  // parapeter : 매개변수
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) {result += num});
	return result;
	// return a + b + args.reduce((acc, item) => acc + item)
}
console.log(sum(10 , 20, 30, 40 ,50, 60)); // arguments : 매개값

// reduce 연습
// 최대값 구하기
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;

// 1번 방법
max = numAry.reduce((acc,item) => acc > item ? acc : item);

// 2번 방법
// max = numAry.reduce(function(acc, item){
// 	if(acc>item){
// 		return acc;
// 	}else{
// 		return item;
// 	}
// });
console.log('최대값', max);