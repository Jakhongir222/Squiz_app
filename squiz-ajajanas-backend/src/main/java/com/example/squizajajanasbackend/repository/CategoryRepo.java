package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.dto.CategoryLiteDTO;
import com.example.squizajajanasbackend.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepo {

    @Autowired
    private JPACategoryRepo repo;

    public Optional<Category> getCategoryById(String categoryId) {
        return repo.findById(categoryId);
    }
    public Object getTheCategories(){
        List<String> ids = repo.findCategoryIds();
        List<String> names = repo.findCategoryNames();

        List<CategoryLiteDTO> dtos = new ArrayList<>();
        for (int i = 0; i < ids.size(); i++) {
            dtos.add(new CategoryLiteDTO(ids.get(i), names.get(i)));
        }
        return dtos;
    }

  public void saveCategory(Category category) {
      repo.save(category);
  }
}
