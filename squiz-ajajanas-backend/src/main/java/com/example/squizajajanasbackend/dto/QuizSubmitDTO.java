package com.example.squizajajanasbackend.dto;

import com.example.squizajajanasbackend.model.Answer;
import com.example.squizajajanasbackend.model.Question;

import java.util.List;

public record QuizSubmitDTO(List<Question> questions, List<Answer> answers) {
}
