package com.example.squizajajanasbackend.controller;
import com.example.squizajajanasbackend.model.user.User;
import com.example.squizajajanasbackend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/category")
public class Controller {
    @Autowired
    Service service;

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getCategory(@PathVariable String categoryId) {
        return ResponseEntity.ok(service.getCategory(categoryId));
    }

    @GetMapping
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(service.getAllCategories());
    }

    @PostMapping("/user")
    public ResponseEntity<?> saveUser(@RequestBody User user){
        return ResponseEntity.ok(service.saveUser(user));
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        return ResponseEntity.ok(service.getUserById(userId));
    }



    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        service.deleteUser(userId);
        return ResponseEntity.ok("User has been deleted");
    }
    





}
