package com.example.squizajajanasbackend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepo {
    @Autowired
    JPACategoryRepo repo;

    public Object getCategoryById(String categoryId) {
        return repo.findById(categoryId);

    }
}
