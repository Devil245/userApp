package com.Sample.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.Sample.Entity.User;
import com.Sample.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Object findAll(){
        return userRepository.findAll();
    }

    public User findById(Long id){
        return userRepository.findOne(id);
    }

    public User save(User user){
        return userRepository.save(user);
    }

    public void delete(User user){
    	userRepository.delete(user);
    	return;
    }

	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}
    
}