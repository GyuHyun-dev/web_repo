// fetch1.js
import { table } from './ajaxMoudule.js';

fetch('../MemberListServ2')
    .then((resolve) => {
        console.log(resolve);
        return resolve.json(); // json문자열을 javascript에 객체타입으로 변환해주는 함수
    })
    .then((result) => {
        console.log(result);
        let title = ['회원번호', '비밀번호', '이름', '연락처'];
        let dataAry = [];
        result = table.makeTable(title, result);
        document.getElementById('show').innerHTML = result;
    })
    .catch((err) => {
        console.log('error => ', err);
    })