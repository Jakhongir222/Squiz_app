package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepo {
    @Autowired
    JPAUserRepo repo;

    public User save(User user) {
        return repo.save(user);
    }

    public Optional<Object> findById(String userId) {
        return Optional.of(repo.findById(userId));
    }

    public void deleteById(String userId) {
        repo.deleteById(userId);
    }
}


