package com.example.squizajajanasbackend.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid",
            strategy = "uuid"
    )
    @Column(name="question_id")
    private String questionId;

    @Column(name="question")
    private String question;

    @JoinColumn(name="question_id")
    @OneToMany(cascade=CascadeType.ALL)
    private List<WrongAnswer> wrongAnswers;

    @JoinColumn(name="question_id")
    @OneToOne(cascade = CascadeType.ALL)
     private CorrectAnswer correctAnswer;

public Question(String questionId, String question, List<WrongAnswer> wrongAnswers, CorrectAnswer correctAnswer) {
        this.questionId = questionId;
        this.question = question;
        this.wrongAnswers = wrongAnswers;
        this.correctAnswer = correctAnswer;
    }

    public Question() {
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<WrongAnswer> getWrongAnswers() {
        return wrongAnswers;
    }

    public void setWrongAnswers(List<WrongAnswer> wrongAnswers) {
        this.wrongAnswers = wrongAnswers;
    }

    public CorrectAnswer getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(CorrectAnswer correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
