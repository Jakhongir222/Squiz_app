package com.example.squizajajanasbackend.Service;

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

    public Object getAllCategories() {
        return repo.getTheCategories();
    }
}
