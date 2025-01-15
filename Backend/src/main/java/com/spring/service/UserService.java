package com.spring.service;

import com.spring.entity.User;
import com.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(@Valid User user) {
    	System.out.println("&&&&&&&&&"+user.getEmail());
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email already exists");
        }
        
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
    	System.out.println("EMAil=====>"+email);
    	User u=userRepository.findByEmailAndPassword(email, password);
    	System.out.println("#######"+u.getUsername());
    	return u;
//        User user = userRepository.findByEmail(email);
//        if (user == null || !user.getPassword().equals(password)) {
//            throw new RuntimeException("Invalid credentials");
//        }
//        return user;
    }
}
