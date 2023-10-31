// dom1.js

// #show > ul > li:수박 + li:사과 + li:복숭아 + li:포도 만들기
const fruits = ['수박', '사과', '복숭아', '포도']

// 1번 방법
// let ul = document.createElement('ul');
// document.getElementById('show').appendChild(ul);

// for(let i = 0; i < fruits.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = fruits[i];
//     document.querySelector('ul').appendChild(li);
// }
// forEach



// 2번 방법
// ul생성
const ul = document.createElement('ul');
// li생성
fruits.forEach(fruits => {
    const li = document.createElement('li'); // <li></li>   li 만들기
    li.innerHTML = fruits; // <li>수박</li> li안에 값넣기
    ul.appendChild(li); // <ul><li>배열 모든값(for문 돌림)</li></ul> ul안에 li안에 값넣기  / 부모요소(ul)기준 하위요소(li)에 넣음
})
document.getElementById('show').appendChild(ul);