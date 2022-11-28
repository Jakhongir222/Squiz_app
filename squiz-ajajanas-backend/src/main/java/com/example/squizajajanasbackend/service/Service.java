package com.example.squizajajanasbackend.service;

import com.example.squizajajanasbackend.dto.UserDTO;
import com.example.squizajajanasbackend.model.user.User;
import com.example.squizajajanasbackend.repository.CategoryRepo;
import com.example.squizajajanasbackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    CategoryRepo repo;
    @Autowired
    UserRepo userRepo;

    public Object getCategory(String categoryId) {
        return repo.getCategoryById(categoryId);
    }

    public Object getAllCategories() {
        return repo.getTheCategories();
    }

    public User saveUser(UserDTO user) {
        return userRepo.save(new User(UUID.randomUUID().toString(), user.name(), user.email()));
    }

    public User getUserByEmail(String email) {
        return userRepo.getByEmail(email);
    }

}
