package com.example.squizajajanasbackend.dto;

import com.example.squizajajanasbackend.model.Question;

import java.util.List;

public record CategoryDTO(String categoryId, String categoryName, List<Question> questions) {
}
