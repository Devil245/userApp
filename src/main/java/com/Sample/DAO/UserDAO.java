package com.Sample.DAO;

import com.Sample.Entity.User;
import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO {

	private static Map<Integer, User> persons;
	
}