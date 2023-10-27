// array4.js

const json = `
[{"id":1,"first_name":"Elvera","email":"eshelper0@theatlantic.com"},
{"id":2,"first_name":"Alberik","email":"achavey1@forbes.com"},
{"id":8,"first_name":"Jere","email":"jsiley7@sun.com"},
{"id":9,"first_name":"Rufe","email":"rgurge8@booking.com"},
{"id":10,"first_name":"Elladine","email":"efreckingham9@wsj.com"}]`; // json -> object. JSON.parse() 사용


let members = JSON.parse(json);

// 1) find 로 찾기
let result = members.find(function(item, idx, ary) {
    if(item.id > 5) {
        return true;
    }
    return false;
    // return item.id > 5;
})

// 2) filter 로 찾기
result = members.filter(function(item, idx, ary){
    return item.id > 5;
})

result = members.filter((item, idx) => {
    return idx >= 1 && idx < 3; // true 값을 반환
})

// 3) reduce 로 찾기
result = members.reduce((acc, item, idx) => {
    if (idx >= 1 && idx < 3){
        acc.push(item);
    }
    return acc;
}, [])
console.log(result);

// 4) some, every = true / false.  sum은 한가지 값이 만족하면 뒤에 출력 x / every는 모든값 출력 후 false 나오면 출력 x
result = members.every((member) => {
    console.log(member);
   return member.first_name.length > 5;
})

// 5) map : A -> B 
result = members.map(member => {
    let obj = {id: member.id, name: member.first_name, email : member.email, grade: 'C'}
    return obj;
})

console.log(result);
