// string2.js

const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium reprehenderit harum dignissimos saepe corrupti aliquid quia, porro perspiciatis deleniti unde expedita numquam rerum? Molestiae perferendis voluptates quo fuga commodi?'

// 1. 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔 출력
const text = words.split(' ');
for(let words of text){
    if(words.length > 5){
        console.log(words);
    }
}
// 2. 주민번호 입력 => 남자/여자 인지 구별하기
let ssn = '950305-7678532';
function checkGender(ssn){
    // 950305 3678532, 9503053678532, 950305-3678532
    
    let ssn1 = ssn.replace(' ', '');
    let ssn2 = ssn.replace('-', '');
    if(ssn1.charAt(6) == 1 || ssn1.charAt(6) == 3 || ssn2.charAt(6) == 1 || ssn2.charAt(6) == 3){
        return '남자 입니다.';
    }else if(ssn1.charAt(6) == 2 || ssn1.charAt(6) == 4 || ssn2.charAt(6) == 2 || ssn2.charAt(6) == 4){
        return '여자 입니다.';
    }else{
        return '외계인 입니다.';
    }
}
console.log(checkGender(ssn));

// 3. 파일명과 파일의 확장자
let file = "d:/temp/sample/book.xls";
let fileName = file.split('.')[0].split('/').reverse()[0]
let fileExt = file.split('.').reverse()[0]

console.log(fileName);
console.log(fileExt);