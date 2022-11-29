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
    private List<Answer> answers;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="question_id")
    private List<Info> info;

    @Column(name="correct_answers_given")
    private int correctAnswersGiven = 0;

    @Column(name="total_answers_given")
    private int totalAnswersGiven = 0;

//    @Column(name="percentage_correct")
//    private int percentageCorrect = 0;


public Question(String questionId, String question, List<Answer> answers, List<Info> info) {
        this.questionId = questionId;
        this.question = question;
        this.answers = answers;
        this.info = info;
    }

    public Question(String questionId, String question, List<Answer> answers, int correctAnswersGiven, int totalAnswersGiven) {
        this.questionId = questionId;
        this.question = question;
        this.answers = answers;
        this.correctAnswersGiven = correctAnswersGiven;
        this.totalAnswersGiven = totalAnswersGiven;
    }

    public Question() {
    }

    public List<Info> getInfo() {
        return info;
    }

    public void setInfo(List<Info> info) {
        this.info = info;
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

    public List<Answer> getWrongAnswers() {
        return answers;
    }

    public void setWrongAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public int getCorrectAnswersGiven() {
        return correctAnswersGiven;
    }

    public void setCorrectAnswersGiven(int correctAnswersGiven) {
        this.correctAnswersGiven = correctAnswersGiven;
    }

    public int getTotalAnswersGiven() {
        return totalAnswersGiven;
    }

    public void setTotalAnswersGiven(int totalAnswersGiven) {
        this.totalAnswersGiven = totalAnswersGiven;
    }

    @Override
    public String toString() {
        return "Question{" +
                "questionId='" + questionId + '\'' +
                ", question='" + question + '\'' +
                ", answers=" + answers +
                ", correctAnswersGiven=" + correctAnswersGiven +
                ", totalAnswersGiven=" + totalAnswersGiven +
                '}';
    }
}
