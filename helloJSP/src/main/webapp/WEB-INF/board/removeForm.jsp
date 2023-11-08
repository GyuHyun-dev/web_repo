<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>removeForm.jsp</title>
</head>
<body>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("vo");
	%>
	<h3>게시글 삭제화면</h3>
	<form action="removeBoard.do" method="post">
		<input type="hidden" name="bno" value="${bno.boardNo }">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="${bno.title }"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer" value="${bno.writer }"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="31" row="5" name="content">${bno.content }</textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><img src="images/${bno.image }" width="80px">
				<td><input type="file" name="img"></td>
			</tr>
			<tr>
				<td colspan="2"><input class="btn btn-warning" type="submit" value="삭제"> <inputtype="submit" value="초기화"></td>
			</tr>
		</table>
	</form>
</body>
</html>
<%@include file="../layout/footer.jsp" %>