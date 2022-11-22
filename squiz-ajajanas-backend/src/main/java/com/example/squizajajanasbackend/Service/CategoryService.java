package com.example.squizajajanasbackend.service;

import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryRepo repo ;

    public Object getCategory(String categoryId) {
        return repo.getCategoryById(categoryId);
    }

    public List<Category> getAllCategories() {
        return repo.getAllCategories();
    }
}
