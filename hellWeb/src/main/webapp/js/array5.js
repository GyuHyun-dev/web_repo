// array5.js

const arr1 = ['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort(); // 기본값 가나다 순
console.log(arr1); // 배열자체를 변경 

const arr2 = [4, 8, 1, 12, 23, 9]
arr2.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }
});
console.log(arr2);

const json = `
[{"id":1,"first_name":"Elvera","email":"eshelper0@theatlantic.com"},
{"id":2,"first_name":"Alberik","email":"achavey1@forbes.com"},
{"id":8,"first_name":"Jere","email":"jsiley7@sun.com"},
{"id":9,"first_name":"Rufe","email":"rgurge8@booking.com"},
{"id":10,"first_name":"Elladine","email":"efreckingham9@wsj.com"}]`

let members = JSON.parse(json);

members.sort(function (a, b) {
    if (a.first_name < b.first_name) {
        return -1;
    } else {
        return 1;
    }
}).reverse();
console.log(members);
