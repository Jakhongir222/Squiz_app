package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.user.User;
import org.springframework.data.repository.CrudRepository;

public interface JPAUserRepo extends CrudRepository<User, String> {
}
