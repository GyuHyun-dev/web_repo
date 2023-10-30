package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService{
	DataSource dataSource = DataSource.getInstance();
	Connection conn = dataSource.getConnection();
	PreparedStatement psmt;
	ResultSet rs;

	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> members = new ArrayList<>();
		String sql = "select * from member";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
		while(rs.next()) {
			MemberVO vo = new MemberVO();
			vo.setMid(rs.getString("MID"));
			vo.setPass(rs.getString("PASS"));
			vo.setName(rs.getString("NAME"));
			vo.setPhone(rs.getNString("PHONE"));
			members.add(vo);
		}
		rs.close();
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return members;
	}
	
	private void close() {
		try {
			if(psmt != null) {
				psmt.close();
			}
			if(conn != null) {
				conn.close();
			}
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "INSERT INTO MEMBER VALUES(?, ?, ?, ?)";
		conn = dataSource.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getMid());
			psmt.setString(2, vo.getPass());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());
			
			int r = psmt.executeUpdate(); // 반환되는 값은 데이터처리 건수
			if(r == 1) {
				return true;
			}
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		} finally {
			close();
		}
		return false;
	}


@Override
public boolean modifyMember(MemberVO vo) {
	String sql = "UPDATE MEMBER SET PASS = ?, NAME = ?, PHONE = ? "
			+ "WHERE MID = ?";
	conn = dataSource.getConnection();
	
	try {
		psmt = conn.prepareStatement(sql);
		psmt.setString(1, vo.getPass());
		psmt.setString(2, vo.getName());
		psmt.setString(3, vo.getPhone());
		psmt.setString(4, vo.getMid());
		
		int r = psmt.executeUpdate(); // 반환되는 값은 데이터처리 건수
		if(r == 1) {
			return true;
		}
		
	} catch (SQLException e) {
		
		e.printStackTrace();
	} finally {
		close();
	}
	return false;
}
}

