<%@page import="co.yedam.board.service.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>게시판 목록</title>
</head>

<body>
	<h3>게시판 목록</h3>
	<%
	List<BoardVO> list = (List<BoardVO>) request.getAttribute("list"); 
	%>
	<table border = "1">
	<thead>
		<tr>
			<th>글번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일자</th>
		</thead>
		<tr>
	<tbody>
	<%
	for(BoardVO vo : list) { 
	%>
	<tr>
		<td><%=vo.getBoardNo()%></td>
		<td><a href="getBoard.do?bno=<%=vo.getBoardNo()%>"><%=vo.getTitle()%></td>
		<td><%=vo.getWriter()%></td>
		<td><%=vo.getWriterDate()%></td>
	</tr>
	<%
	}
	%>
	</tbody>
	</table>
	<p>
		<a href="boardForm.do">글쓰기</a>
	</p>
</body>

</html>