package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;


// uri : *.do
public class FrontController extends HttpServlet{
	// init -> service
	
	Map<String, Command> map = new HashMap<>();  // Command 인터페이스를 value 값으로
	@Override
	public void init(ServletConfig config) throws ServletException {
		// 메인페이지
		map.put("/main.do", new MainControl());
		// 로그인
		map.put("/loginForm.do", new loginFormControl());
		map.put("/login.do", new loginControl());
		map.put("/logout.do", new logoutControl());
		
//		map.put("/FirstServlet.do", new FirstControl()); FirstControl:Command 인터페이스 구현하는 클래스
//		map.put("/second.do", new ScondControl()); // 앞의 주소가 들어오면 뒤에 클래스 실행함
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		// 등록화면
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		// 수정화면
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		// 삭제화면
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
		// 멤버목록
		map.put("/memberList.do", new MemberListControl());
				
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 요청정보의 한글 인코딩
		req.setCharacterEncoding("UTF-8");
		
		System.out.println("FrontController");
		String uri = req.getRequestURI();  // http://localhost:8080/helloJSP/??.do
		String context = req.getServletContext().getContextPath(); // helloJSP
		String page = uri.substring(context.length());
		System.out.println(page);
		
		Command controllor = map.get(page);
		controllor.execute(req, resp);
		
	}
}
