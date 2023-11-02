package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

/**
 * Servlet implementation class GetStudentServlet
 */
@WebServlet("/GetStudent.do")
public class GetStudentServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text:json;charset=utf-8");
		
		String id = req.getParameter("id");
		
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = svc.getStudent(id);
		
		
		
		// json 반환
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create(); //
		String json = gson.toJson(vo);
		PrintWriter out = resp.getWriter();
		out.print(json);
		
	
	}


}
