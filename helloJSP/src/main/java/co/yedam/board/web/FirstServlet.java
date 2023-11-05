package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	// init -> service -> destroy
	private static final long serialVersionUID = 1L;

	public FirstServlet() {
		super();

	}

	@Override  // service가 없으면 doGet이나  doPost 실행, service가 있으면 service 실행
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("service실행");
		doGet(req, resp);  // doGet 도 시핼시켜 주려면 service 안에 doGet 메소드 넣어줘야함.
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for (int i = 0; i < 5; i++) {
			response.getWriter().print("<p>" + i + "번째 이름은 " + name + ", 나이는 " + age + "입니다.</p>");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}