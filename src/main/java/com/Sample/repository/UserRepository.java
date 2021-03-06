package com.Sample.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Sample.Entity.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
	public User findByEmail(String email);
	
}