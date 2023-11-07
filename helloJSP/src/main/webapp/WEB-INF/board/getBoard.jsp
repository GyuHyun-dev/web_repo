<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
	#list span {
		margin: 8px;
	}
</style>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>getBoard.jsp</title>
</head>

<body>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<h3>상세화면(조회화면)</h3>
	<form action="modifyForm.do" name="myFrm">
		<input type="hidden" name="bno" value="%=vo.getBoardNo()%>">
		<table class="table" border="1">
			<tr>
				<th>글번호</th>
				<td class="boardNo"><%=vo.getBoardNo()%></td>
				<th>작성일시</th>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<tr>
				<th>글제목</th>
				<td colspan="3"><%=vo.getTitle()%></td>
			</tr>
			<tr>
				<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<% if(vo.getImage() == null) {%>
				<td></td>
				<%}else { %>
				<td colspan="3"><img width="80px" src="images/<%=vo.getImage()%>"></td>
				<%} %>
			</tr>
			<tr>
				<th>작성자</th>
				<th><%=vo.getWriter()%></th>
				<th>조회수</th>
				<th><%=vo.getViewCnt()%></th>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<% if(logId != null && logId.equals(vo.getWriter())){ %>
					<input type="submit" class="btn btn-primary" value="수정">
					<input type="button" class="btn btn-warning" value="삭제">
					<%} else { %>
					<input disabled type="submit" value="수정">
					<input disabled type="button" value="삭제">
					<%}  %>
				</td>
			</tr>
		</table>
	</form>

	<h3>댓글등록</h3>
	<table class="table">
		<tr>
			<th>댓글내용</th>
			<td><input type="text" id="content"></td>
			<td><button id="addReply">댓글등록</button></td>
		</tr>
	</table>

	<h3>댓글목록</h3>
	<ul id="list">
		<li style="display: none;" id="template"><span>11</span><b>첫번째글입니다.</b><span>user01</span><span>2023-11-07</span>
	</ul>

	<p><a href="boardList.do">목록으로</a></p>
	<script>
		document.querySelector('input[type=button]')
			.addEventListener('click', function (e) {
				document.forms.myFrm.action = 'removeForm.do';
				document.forms.myFrm.submit();
			});
		let bno = "<%=vo.getBoardNo()%>";
		let writer = "<%=logId%>";
		bno = document.querySelector('.boardNo').innerHTML;
		fetch('replyList.do?bno=' + bno)
			.then(resolve => resolve.json())
			.then(result => {
				result.forEach(reply => {
					let li = makeRow(reply)
					document.querySelector('#list').append(li)
				})
			})

			.catch(err => console.log(err));

		// 등록버튼 이벤트
		document.querySelector("#addReply").addEventListener('click', function (e){
			let reply = document.querySelector('#content').value;
			//ajax. bno/writer/reply =>전달
			fetch('addReply.do', {
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: 'bno='+bno+'&reply='+reply+'&replyer='+writer
			})
			.then(resolve => resolve.json())
			.then(result => {
				if(result.retCode == 'OK'){
					document.querySelector('#list').append(makeRow(result.vo));
				}else {
					alert('Error');
				}
			})
			
		})	
		
		function makeRow(reply){
			let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display = 'block';
			console.log(temp);
			temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
			temp.querySelector('b').innerHTML = reply.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
			return temp;
		}
		
	</script>
<%@include file="../layout/footer.jsp" %>