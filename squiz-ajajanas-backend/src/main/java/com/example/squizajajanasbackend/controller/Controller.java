package com.example.squizajajanasbackend.controller;

import com.example.squizajajanasbackend.Service.CategoryService;
import com.example.squizajajanasbackend.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class Controller {
    @Autowired
    CategoryService service;

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getCategory(@PathVariable String categoryId){
        return ResponseEntity.ok(service.getCategory(categoryId));
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(service.getAllCategories());
    }

}
