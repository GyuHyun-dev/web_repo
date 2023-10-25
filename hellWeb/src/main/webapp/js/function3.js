// function3.js

function Member(name, age, height) {
  console.log(this);
  this.name = name;
  this.age = age;
  this.height = height;
  this.showInfo = function () {
	  return `이름은 ${this.name}이고 나이는 ${this.age} 키는 ${this.height}입니다.`;
  }
}
var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo());

const members = [
	new Member('홍길동', 18, 123.3),
	new Member('김길동', 19, 124.3),
	new Member('박길동', 20, 125.3)
]

// 함수 : table 생성.
function makeTable(memberAry = []) {
  let str = '<table border="1"><thead><tr><td> 이름 </td><td> 나이 </td><td> 키 </td><td> 비고 </td></tr></thead><tbody>';
  members.forEach(function(item){
    str += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.height}</td><td>${item.showInfo()}</td></tr>`;
  })
  str += '</tbody></table>';
  return show.innerHTML = str;
}
  // let str = '';
  // str += '<table border="1>';
  // str += '<tbody>';
  // memberAry.

makeTable(members);