package com.example.squizajajanasbackend.model;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;


@Entity(name = "info_correct")
public class Info {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name="info_id")
    private String infoId;

    @Column(name="info")
    private String info;


    public String getInfoId() {
        return infoId;
    }

    public Info() {
    }

    public Info(String infoId, String info) {
        this.infoId = infoId;
        this.info = info;
    }

    public void setInfoId(String infoId) {
        this.infoId = infoId;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

//    public Question getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(Question question) {
//        this.question = question;
//    }
}
