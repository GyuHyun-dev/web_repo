// ajax.js
// Asynchronous Javascript And XML : 

// 비동기(먼저 끝나는 순서대로 코드 실행) vs 동기(우리가 알던 방식 순차적으로 위에서부터 코드 실행) 

// 동기방식
import {
    table
} from './ajaxMoudule.js';
let friends = [];
friends.push("홍길동");
friends.push("김길동");
friends.push("최길동");

// 비동기 방식 (지연시간 순으로 실행) /  2가지 방식 setTimeout(), XMLHttpRequest()
setTimeout(function () {
    friends.push('홍길동');
}, 1000);

setTimeout(function () {
    friends.push('김길동');
}, 500);

setTimeout(function () {
    friends.push('최길동');
}, 2000);

console.log(friends);

// 보류
let newMember = {
    mid: "M009",
    pass: "9999",
    name: "민식이",
    phone: "010-9999-9999"
}

// 1) ajax 실행
let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson;

function loadJson() {
    console.log(xhtp.responseText)
    let result = JSON.parse(xhtp.responseText);
    console.log(result);
    let titles = ["회원번호", "비번", "이름", "연락처"];
    let dataAry = [];
    result.forEach(member => {
        dataAry.push({mid: member.mid, pass: member.pass, 
                      name: member.name, phone: member.phone
        })
    })
    	// 페이지 작성
        result = table.makeTable(titles, dataAry);
        console.log(result);
        document.getElementById('show').innerHTML = result;
}

function loadXML() {
    //console.log(xhtp.responseXML);
    let doc = xhtp.responseXML;
    let records = doc.getElementsByTagName('record')
    //console.log(records);

    let titles = ["회원번호", "비번", "이름", "연락처"];
    let dataAry = [];
    for (let record of records) {
        let obj = {
            mid: record.children[0].textContent, // mid
            pass: record.children[1].textContent, // pass
            name: record.children[2].textContent, // name
            phone: record.children[3].textContent // phone
        }
        dataAry.push(obj);
        let result = table.makeTable(titles, dataAry);
        document.getElementById('show').innerHTML = result;
       
    }
// 2) newMember 추가 , ajax 실행이 되고 나서 추가하는 기능이 실행
let tr = '<tr><td>' + newMember.mid + 
    '</td><td>' + newMember.pass +
    '</td><td>' + newMember.name +
    '</td><td>' + newMember.phone + '</td></tr>';
document.getElementById('list').innerHTML += tr;
    // newMember 값을 활용해서 tbody = "list" 추가
// let tr = '<tr><td>M009</td><td>9999</td><td>민식이</td><td>010-9999-9999</td></tr>'
// document.getElementById('list').innerHTML += tr;
} // end of onload.

