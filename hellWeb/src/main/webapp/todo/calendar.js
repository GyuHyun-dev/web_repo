// calendar.js

// const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
// const lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// const calendar = {
// 	html: '',
// 	makeHead() {
// 		let st = '';
// 		st += '<thead><tr>';
// 		for (let prop in yoil) {
// 			st += '<td>' + yoil[prop] + '</td>';
// 		}
// 		st += '</tr></thead>';
// 		return st;
// 	},

// 	makeBody(mon) {
// 		let str = '';
// 		str += '<tbody><tr>';
// 		for (let i = 1; i <= lastDay[mon - 1]; i++) {
// 			str += '<td>' + i + '</td>'
// 			if (i % 7 == 0) {
// 				str += '<tr></tr>';
// 			}
// 		};
// 		str += '</tr></tbody>';
// 		return str;
// 	},

// 	makeCalendar(dom) {
// 		for (let i = 1; i <= 12; i++) {
// 			let monthH = calendar.makeHead();
// 			let monthB = calendar.makeBody(i);
// 			this.html += monthH + monthB;
// 		}
// 		dom.innerHTML = '<table border = "1">' + this.html + '</table>';
// 	}
// }

// calendar.makeCalendar(document.getElementById('show'));

// const today = new Date(); // 오늘 날짜를 생성.
// console.log('오늘날짜 : ' , today.getDate());

const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const today = new Date();

const calendar = {
	html : '',
	makeHead(){
		let st = '';
		st += '<thead><tr>';
		for(let prop in yoil){
			if(yoil[prop] == '일요일'){
				st += '<td style = "color:red">' + yoil[prop] + '</td>';
			}else if(yoil[prop] == '토요일'){
				st += '<td style = "color:blue">' + yoil[prop] + '</td>';
			}else{
				st += '<td>' + yoil[prop] + '</td>';
			}
		}
		st += '</tr></thead>';
		return st;
	},

	makeBody(){
		let str = '';
		str += '<tbody><tr>';
		for(let i = 1; i <= 31; i++){
			if(i==today.getDate()){
				str += '<td style = "background-color:yellow">' + i + '</td>';	
			}else if(i%7 == 1){
				str += '<td style = "background-color:red">' + i + '</td>';
			}else if(i%7 == 0){
				str += '<td style = "background-color:blue">' + i + '</td>';
			}else{
				str += '<td>' + i + '</td>';
			}			

			if(i%7 == 0){
				str += '<tr></tr>';
			}
		}
		str += '</tr></tbody>';
		return str;
	},
	makeCalender(dom){
		let monthH = calendar.makeHead();
		let monthB = calendar.makeBody();
		this.html += monthH + monthB;
		dom.innerHTML = '<table border = "1">' + this.html + '</table>';
	},
	showCalender(){
		this.makeCalender(document.getElementById('show'));
	}
}
export {calendar}
