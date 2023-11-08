package co.yedam.common;

public class PageDTO {
	int total; // 전체 건수
	int currentPage; // 현재 페이지
	boolean next, prev; // 이전, 이후 페이지 존재하는지
	int startPage, endPage;
	int boardNo;
	
	// 1page 3page ~ 10page.
	public PageDTO(int boardNo, int total, int currentPage) {
		this.currentPage = currentPage;
		
		int realEnd = (int) Math.ceil(total / 5.0);
		
		this.boardNo = boardNo;
		this.total = total;
		
		
		this.endPage = (int) Math.ceil(currentPage / 10.0) * 10;
		this.startPage = this.endPage - 9;
		
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
		
	}
} // end of class 
