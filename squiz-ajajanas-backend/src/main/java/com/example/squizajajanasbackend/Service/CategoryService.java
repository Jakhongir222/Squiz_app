package com.example.squizajajanasbackend.Service;

import com.example.squizajajanasbackend.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    CategoryRepo repo ;

    public Object getCategory(String categoryId) {
        return repo.getCategoryById(categoryId);

    }
}
