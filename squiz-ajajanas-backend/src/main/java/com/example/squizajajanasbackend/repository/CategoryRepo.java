package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepo {
    @Autowired
    JPACategoryRepo repo;

    public Object getCategoryById(String categoryId) {
        return repo.findById(categoryId);

    }

    public List<Category> getAllCategories() {
        return (List<Category>) repo.findAll();
    }
}
