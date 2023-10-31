// dom3.js
// table > (thead > tr > th*5) + (tbody > tr > td*5)* 건수
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=sVQVNRYochk7p7pf88MgHNhFcYQfJ2TMwkdkkSQe47JIY7ySj5DptEgTeFpdZ9dXbrDAxKSNRBggCmUEdsqqnw%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처', '위도', '경도'];


fetch(url)
    // function(resolve) {return resolve.json()}
    .then(resolve => resolve.json())
    .then(fetchCallback)
    .catch(err => console.log('error => ', err))




// fatch 호출되는 함수 callback 함수
function fetchCallback(result) {
    let rawData = result.data; // 원래 데이터
        console.log(rawData[0])
        let sidoAry = []; // sidoAry에 시,도 정보를 중복된 값 제거
        rawData.forEach(center => {
            if (sidoAry.indexOf(center.sido) == -1) {
                sidoAry.push(center.sido);
            }
        })

        console.log(sidoAry);

        let sidoSel = document.querySelector('#sidoList')
        sidoAry.forEach(sido => {
            let opt = document.createElement('option');
            opt.innerHTML = sido;
            sidoSel.append(opt);
        })
        // select 태그에 chang이벤트 발생
        sidoSel.addEventListener('change', changeCallback);
        function changeCallback(e) {           
            console.log(e.target.value);
            let searchSido = e.target.value;
            // 선택된 시도 값에 맞는 센터명만 출력
            let filterAry = rawData.filter(center => {
                return center.sido == searchSido;               
            })
            console.log(filterAry);
            genTable(filterAry);
        }
        let filterAry = rawData.filter((center, idx) => idx < 10) 
            genTable(filterAry)
}

function genTable(rawData = []) {
    // 초기화
    //document.querySelector('#show').innerHTML = '';
    document.querySelector('#show').innerHTML = '';
    // 전체 rawData로 출력
    let thead = table.makeHead(titles); // 헤더정보
    // let mapData = rawData.map(center => { // 매핑정보 출력
    //     let newCenter = {
    //         id: center.id,
    //         centerName: center.centerName.replace('코로나19 ', ''),
    //         org: center.org,
    //         phoneNumber: center.phoneNumber,
    //         lat : center.lat, 
    //         let : center.lng
    //     }
    //     return newCenter;
    // });

    let mapData = rawData.reduce((acc, center) => {
        let newCenter = {
            id: center.id,
            centerName : center.centerName.replace('코로나19', ''),
            org : center.org,
            phoneNumber : center.phoneNumber,
            lat : center.lat,
            let : center.let
        }
        acc.push(newCenter)
        return acc
    },[])



    let tbody = table.makeBody(mapData); // 배열안에 객체가 있음 [{}, {}, {} ...{}]
    let table1 = document.createElement('table');
    table1.setAttribute('border', 1);
    table1.append(thead, tbody);
    document.querySelector('#show').append(table1);

    // tr클릭 이벤트 등록
    let targetTr = document.querySelectorAll('tbody tr')
    targetTr.forEach(tr => {
        tr.addEventListener('click', function(e) {
        let lat = tr.children[4].innerHTML;
        let lng = tr.children[5].innerHTML;
        window.open('daumapi.html?x=' + lat + '&y=' + lng);
        })
    })
}