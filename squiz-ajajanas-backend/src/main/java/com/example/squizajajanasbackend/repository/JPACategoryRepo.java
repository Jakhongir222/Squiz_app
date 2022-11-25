package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.dto.CategoryLiteDTO;
import com.example.squizajajanasbackend.model.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

public interface JPACategoryRepo extends CrudRepository<Category, String> {
    @Query("SELECT categoryId FROM Category")
    List<String> findCategoryIds();

    @Query("SELECT categoryName FROM Category")
    List<String> findCategoryNames();

}
