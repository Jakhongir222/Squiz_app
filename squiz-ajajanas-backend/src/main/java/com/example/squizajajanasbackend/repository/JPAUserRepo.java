package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.user.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JPAUserRepo extends CrudRepository<User, String> {
    User findFirstUserByEmail(String email);

}
