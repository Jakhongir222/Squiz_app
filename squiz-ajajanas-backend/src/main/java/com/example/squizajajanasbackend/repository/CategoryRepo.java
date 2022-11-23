package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepo {

    @Autowired
    private JPACategoryRepo repo;

    public Optional<Category> getCategoryById(String categoryId) {
        return repo.findById(categoryId);
    }
    public List<Category> getAllCategories() {
        return (List<Category>) repo.findAll();
    }

  public void saveCategory(Category category) {
      repo.save(category);
  }
}
