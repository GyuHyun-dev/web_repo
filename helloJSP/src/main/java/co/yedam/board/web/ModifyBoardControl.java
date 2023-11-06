package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 파라메터 활용 -> 데이터 수정 -> 목록이동
		BoardVO vo = new BoardVO();
		BoardService svc = new BoardServiceImpl();
		
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String image = req.getParameter("image");
		String content = req.getParameter("content");
		
		vo.setBoardNo(Integer.parseInt(bno));
		vo.setTitle(title);
		vo.setImage(image);
		vo.setContent(content);
		
		if(svc.editBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
	}

}
