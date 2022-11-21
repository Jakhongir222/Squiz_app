package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.Category;
import org.springframework.data.repository.CrudRepository;

public interface JPACategoryRepo extends CrudRepository<Category, String> {
}
