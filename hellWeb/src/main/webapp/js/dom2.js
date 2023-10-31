// dom2.js

// #show > table > tbody > tr > td:사과 + td:1000
const fruits = [
    {name: "사과", price: 1000, farmer: '홍길동'},
    {name: "복숭아", price: 1500, farmer: '박길동'},
    {name: "포도", price: 2000, farmer: '이길동'},
    {name: "수박", price: 3000, farmer: '조길동'}
]

const tal = document.createElement('table');
const tbd = document.createElement('tbody');
tal.setAttribute('border', '1');  // <table boder='1'> 같은의미
fruits.forEach(fruits => {  
    const tr = document.createElement('tr');

    for(let prop in fruits) {
        const td1 = document.createElement('td');
        td1.innerHTML = fruits[prop]
        tr.appendChild(td1);
    }

    // const td2 = document.createElement('td');
    // td2.innerHTML = fruits.price;
    // tr.appendChild(td2);

    tbd.appendChild(tr);   // tbody에 tr 하위요소를 등록
})
tal.appendChild(tbd);  // table에 tbody를 하위요소로 등록
document.querySelector('#show').appendChild(tal);



