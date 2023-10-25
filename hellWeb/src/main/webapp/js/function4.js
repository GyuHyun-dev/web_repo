// function4.js
// 생성자 함수 Member
function Member(name, age, height) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age} 키는 ${this.height} 입니다.`;
    }
  }  // end of Member
// makeTr 함수
function makeTr(member = {name, age, height, showInfo}) {
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button>';
    html += '</tr>';
    return html;
  }

document.getElementById('savaBtn').onclick = function (e) {
    if(document.getElementById('name').value == ""){
        alert('이름 입력하세요.');
    }else{

        console.log(e.target);
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let height = document.getElementById('height').value;
    
        const mem = new Member(name, age, height);
        let str = makeTr(mem);
    
        // let list = document.getElementById('list')
        // list.innerHTML += str;
        document.getElementById('list').innerHTML += str;
    
        // 입력초기화
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('height').value = "";
        document.getElementById('name').focus = "";
        
    }
    
    // function Member()....  , makeTr(member),
}