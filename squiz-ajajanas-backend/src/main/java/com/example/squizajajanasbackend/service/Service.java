package com.example.squizajajanasbackend.service;

import com.example.squizajajanasbackend.model.user.User;
import com.example.squizajajanasbackend.repository.CategoryRepo;
import com.example.squizajajanasbackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {

        @Autowired
        CategoryRepo repo ;
        UserRepo userRepo;

        public Object getCategory(String categoryId) {
            return repo.getCategoryById(categoryId);
        }

        public Object getAllCategories() {
            return repo.getTheCategories();
        }

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public User getUserById(String userId) {
        return (User) userRepo.findById(userId).orElseThrow();
    }

    public void deleteUser(String userId) {

        userRepo.findById(userRepo.toString()).orElseThrow();
        userRepo.deleteById(userId);
    }








}
