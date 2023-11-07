package co.yedam.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;

public interface BoardMapper {
	public List<BoardVO> list();
	public BoardVO select(int boardNo);
	public int updateCnt(int boardNo);
	public int insert(BoardVO boardNo);
	public int update(BoardVO boardNo);
	public int delete(int boardNo);
	// 로그인 관련
	public MemberVO getUser(@Param("id") String id, @Param("pw") String pw);
	public List<MemberVO> listMem();
}
