package com.example.squizajajanasbackend.populate;


public record FileReaderDTO(
         String category,
         String question,
         String answer,
         String[] wrong_answers
) {
}
