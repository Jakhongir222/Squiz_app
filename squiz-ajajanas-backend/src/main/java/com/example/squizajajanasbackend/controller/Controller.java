package com.example.squizajajanasbackend.controller;
import com.example.squizajajanasbackend.dto.UserDTO;
import com.example.squizajajanasbackend.dto.QuizSubmitDTO;
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

    @PostMapping("/{categoryId}/submit/{email}")
    public ResponseEntity<?> submitQuizScore(@PathVariable String categoryId, @RequestBody QuizSubmitDTO dto, @PathVariable String email) {
        return ResponseEntity.ok(service.submitScore(dto, categoryId, email));
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getCategory(@PathVariable String categoryId) {
        return ResponseEntity.ok(service.getCategory(categoryId));
    }

    @GetMapping
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(service.getAllCategories());
    }

    @PostMapping("/user")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userdto){

        User user = service.getUserByEmail(userdto.email());
        if (user != null){
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.ok(service.saveUser(userdto));
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<User> getUserById(@PathVariable String email) {
        return ResponseEntity.ok(service.getUserByEmail(email));
    }

}
