package com.example.squizajajanasbackend.model;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.util.UUID;


@Entity
@Table(name = "correct_answer")
public class CorrectAnswer {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid",
            strategy = "uuid"
    )
    @Column(name = "correct_answer_id", nullable = false)
    private String correctAnswerId;
    @Column(name = "correct_answer")
    private String correctAnswer;

    public CorrectAnswer(String correctAnswerId, String correctAnswer) {
        this.correctAnswerId = correctAnswerId;
        this.correctAnswer = correctAnswer;
    }

    public CorrectAnswer() {
    }

    public String getCorrectAnswerId() {
        return correctAnswerId;
    }

    public void setCorrectAnswerId(String correctAnswerId) {
        this.correctAnswerId = correctAnswerId;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
