// object.js

console.log('object start');

let obj1 = {
    name : 'Hong',
    age : 20
}

// 주소 참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

// 주소 복사.
let obj3 = { ...obj1}
obj3.age = 24;
console.log(obj3);

// 클래스
class Member {  // 클래스
    constructor(){
        console.log('cons');
    }
    // constructor() {  // 생성자
    //     this.name = name;
    //     this.age = age;
    //     this.height = height;
    // }
    setWeight(weight) {  // 메소드
        this.weight = weight;  // 필드
    }
    getWeight() {  // 메소드
        return this.weight;  // 필드
    }
    showInfo() {  // 메소드
        return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
    }


    // 학생의 정보 : 학생번호, 이름, 영어점수, 수학점수
    makeTr(student = {sno, sname, engScore, mathScore}){
        // tr>td*4
        let tr = '';
        tr += '<tr>';
        tr += '<td>' + student.sno + '</td>';
        tr += '<td>' + student.sname + '</td>';
        tr += '<td>' + student.engScore + '</td>';
        tr += '<td>' + student.mathScore + '</td>';
        tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button>';
        tr += '</tr>';
        return tr;
    }
    makeHTML(studAry = []) {
        // html 생성

        let table = '<table border = "1"><tbody>';
        let obj = this;        
        table += studAry.reduce(function(acc, stud){        
            return acc + obj.makeTr(stud)
        }, '');
        table += '<tbody></table>';
        this.html = table;
    }
    showPage(dom){
        // innerHTML 속성에 html 저장
        dom.innerHTML = this.html;
    }
}
const mem1 = new Member('홍길동', 20, 156.7);  // 인스턴스 만듬
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는', mem1.getWeight(), 'kg 입니다.');
