package org.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataSource {
		// 먼저 자기 객체 만들기
		private static DataSource dataSource = new DataSource();
		// 생성자 만들기
		private DataSource() {}
		
		private static String dirver = "oracle.jdbc.OracleDriver";
		private static String url = "jdbc:oracle:thin:@192.168.0.27:1521:xe";
		private static String user = "hr";
		private static String password = "1234";
		
		private static Connection conn;
		
		// 외부에서 가져다 쓰기
		public static DataSource getInstance() {
			return dataSource;
		}
		
		public Connection getConnection(){
			try {
				Class.forName(dirver);
				conn = DriverManager.getConnection(url, user, password);
//				System.out.println("성공입니다!");
			}catch(ClassNotFoundException | SQLException e) {
				e.printStackTrace();
			}
			return conn;
		}
	}

