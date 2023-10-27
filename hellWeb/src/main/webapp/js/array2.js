// array2.js : MOCK_DATA.JSON 파일의 데이터 활용

const json = `
[{"id":1,"first_name":"Elvera","email":"eshelper0@theatlantic.com"},
{"id":2,"first_name":"Alberik","email":"achavey1@forbes.com"},
{"id":3,"first_name":"Nancie","email":"nhamflett2@wsj.com"},
{"id":4,"first_name":"Bone","email":"bknight3@mysql.com"},
{"id":5,"first_name":"Pryce","email":"pblethin4@whitehouse.gov"},
{"id":6,"first_name":"Maggie","email":"mskelcher5@nationalgeographic.com"},
{"id":7,"first_name":"Lanny","email":"lcardwell6@alexa.com"},
{"id":8,"first_name":"Jere","email":"jsiley7@sun.com"},
{"id":9,"first_name":"Rufe","email":"rgurge8@booking.com"},
{"id":10,"first_name":"Elladine","email":"efreckingham9@wsj.com"}]`;  // json -> object. JSON.parse() 사용

let members = JSON.parse(json);
console.log(members);

let delMember = "Maggie";
let yourinfo = { name : "Hong", email : "hong@email.com"}
// splice 활용으로 지우기
// for (let i = 0; i < members.length; i++) {
//     if(members[i].first_name == delMember){
//         members.splice(i,1,yourinfo);
//     }
// }
// console.log(members);


// members.forEach((member, idx) => {
//     if(member.first_name == delMember){
//         members.splice(idx, 1, {id: member.id, first_name: yourinfo.name, email: yourinfo.email});
//     }
// })

// let inpVal = window.prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com");
// console.log(inpVal); // 홍길동, hong@email.com
// const infoAry = inpVal.split(',');
// let nid = members[members.length - 1].id + 1;  
// let newMember = { id : nid, first_name : infoAry[0], email : infoAry[1]}

// // 배열의 추가
// members.push(newMember);
// // members.splice(members.length, 0, newMember);
// console.log(members);

const dupAry = [["라이언", 5], ["어피치", 3], ["콘", 2], ["무지", 4]]
console.log(dupAry);
console.table(dupAry);