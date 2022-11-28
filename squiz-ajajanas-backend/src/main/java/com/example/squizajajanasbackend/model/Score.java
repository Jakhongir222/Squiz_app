package com.example.squizajajanasbackend.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "score")
public class Score {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid",
            strategy = "uuid"
    )

    @Column(name="score_id")
    private String scoreId;

    @Column(name="score")
    private int score;

    public Score() {}

    public Score(String scoreId, int score) {
        this.scoreId = scoreId;
        this.score = score;
    }

    public String getScoreId() {
        return scoreId;
    }

    public void setScoreId(String scoreId) {
        this.scoreId = scoreId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}