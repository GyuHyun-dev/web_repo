// array3.js

let pos = "Hello, World".indexOf(",");
console.log(pos);

let names = ["콘", "무지", "라이언", "어피치"]
pos = names.indexOf("무지");
if (pos == -1){
    console.log("없는 이름입니다.");
}else {
    console.log("무지는 "  + (pos + 1) + "번째 위치에 있습니다.");
}

// {name : "", age : 20}
let members = [
    {name : "김민식", age : 22},
    {name : "최민식", age : 23},
    {name : "김우현", age : 26}
]
let search = "민식";
// 1번 방식
// let cnt = 0;
// members.forEach(member => {  
//     if (member.name.indexOf(search) > -1) {
//         cnt++;
//     }
// })
// console.log(cnt + "명이 있습니다.");

// 2번 방식
let count = 0;
for(let i = 0; i < members.length; i++){
    if((members[i].name.indexOf("민식") != -1)){
       count++;
    }
}
console.log(count);