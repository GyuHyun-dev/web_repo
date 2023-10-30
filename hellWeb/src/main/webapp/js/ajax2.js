// ajax2.js
import { table } from './ajaxMoudule.js';

// onclick 이벤트 등록 <button onclick="addMember()">
// member = {name: "hong", age: 20} member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = addMember;

function addMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid +
		'&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		// 사용자 입력값 : retCode = OK => {vo: mid, pass, name, phome}
		// tr 생성해서 td 생성  화면 출력 id="list" 의 innerHTML 속성활용
		// retCode=NG => alert('처리중 에러')

		let result = JSON.parse(xhtp.responseText);
		if (result.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리중 에러(회원아이디 : ' + result.vo.mid + ')');
		}
	}
}

function modMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../ModMemberServ.html?mid=' + mid +
		'&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		// console.log(xhtp.responseText);
		// 사용자 입력값 : retCode = OK => {vo: mid, pass, name, phome}
		// tr 생성해서 td 생성  화면 출력 id="list" 의 innerHTML 속성활용
		// retCode=NG => alert('처리중 에러')

		let result = JSON.parse(xhtp.responseText);
		console.log(result);
		console.log(document.querySelectorAll('#list tr'));
		document.querySelectorAll('#list tr').forEach(tr => {
			console.log(tr.children)
			if (tr.children[0].innerHTML == result.vo.mid) {
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;
			}
		})
	}
}
