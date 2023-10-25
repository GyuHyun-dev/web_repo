// object3.js

const member = {
    name : "홍길동",
    age : 20,
    height : 123.4,
    showInfo: function() {
        return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
    },
    html : '',
    makeTr : function(student = {sno, sname, engScore, mathScore}) {
        let tr = '';
        tr += '<tr>';
        // for ..in 활용함
        for(let prop in student) {
            tr += '<td>' + student[prop] + '</td>';
        }
        // tr += '<td>' + student.sno + '</td>';
        // tr += '<td>' + student.sname + '</td>';
        // tr += '<td>' + student.engScore + '</td>';
        // tr += '<td>' + student.mathScore + '</td>';
        tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button>';
        tr += '</tr>';
        return tr;
    },
    makeHTML(studAry) {
        // html 생성 => this.makeTr(std);
        let table = '<table border = "1"><tbody>';
        let obj = this;        
        table += studAry.reduce(function(acc, stud){        
            return acc + obj.makeTr(stud)
        }, '');
        table += '<tbody></table>';
        this.html = table;
    },
    showPage(dom) {
          // innerHTML 속성에 html 저장
          dom.innerHTML = this.html;
    }
 }

 // 객체의 속성 for ..in  makeTr 에서 활용 
for (let prop in member) {
    // 가져오는 방식 2가지 .속성 이나 배열방식 ['']으로
    // member.name / member['age']
    // console.log(typeof member[prop]);
    if (typeof member[prop] != 'function') {
        console.log(member[prop]);
    }
}

 const students = [
    {sno : '001', sname : "최해주", engScore : 80, mathScore : 85},
    {sno : '002', sname : "김채민", engScore : 82, mathScore : 83},
    {sno : '003', sname : "최다예", engScore : 84, mathScore : 88}
]

member.makeHTML(students);
member.showPage(document.getElementById('show'));