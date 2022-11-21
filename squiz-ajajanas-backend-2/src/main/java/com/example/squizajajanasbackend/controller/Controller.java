package com.example.squizajajanasbackend.controller;

import com.example.squizajajanasbackend.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
