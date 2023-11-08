package co.yedam.reply.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {
	// 목록, 단건, 추가, 수정, 삭제
	public List<ReplyVO> replyList(int boardNo, int page);
	public ReplyVO selectReply(int replyNo); 
	public boolean addReply(ReplyVO vo); 
	public boolean updateReply(ReplyVO vo); 
	public boolean deleteReply(int replyNo);
	
	// 댓글건수
	public int getTotalCnt(int boardNo);
	
	// 차트데이터
	public List<Map<String, Object>> getReplyCountByWriter();
	

}
