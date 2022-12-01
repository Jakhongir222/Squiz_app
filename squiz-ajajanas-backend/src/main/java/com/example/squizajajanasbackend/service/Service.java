package com.example.squizajajanasbackend.service;

import com.example.squizajajanasbackend.dto.UserDTO;
import com.example.squizajajanasbackend.dto.QuizSubmitDTO;
import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.model.Question;
import com.example.squizajajanasbackend.model.Score;
import com.example.squizajajanasbackend.model.user.ScoreConverter;
import com.example.squizajajanasbackend.model.user.User;
import com.example.squizajajanasbackend.repository.CategoryRepo;
import com.example.squizajajanasbackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;
import java.util.List;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    CategoryRepo repo;
    @Autowired
    UserRepo userRepo;

    public Object getCategory(String categoryId) {
        return repo.getCategoryById(categoryId);
    }

    public Object getAllCategories() {
        return repo.getTheCategories();
    }

    public User saveUser(UserDTO user) {
        return userRepo.save(new User(UUID.randomUUID().toString(), user.name(), user.email()));
    }

    public User getUserByEmail(String email) {
        return userRepo.getByEmail(email);
    }

    public Object submitScore(QuizSubmitDTO dto, String categoryId, String email) {
        Score score = ScoreConverter.createScoreFromDto(dto);

        User user = userRepo.getByEmail(email);
        List<Score> scores = user.getScores();
        scores.add(score);
        user.setScores(scores);
        userRepo.save(user);

        Category category = repo.getCategoryById(categoryId).get();
        List<Question> questionList = ScoreConverter.createQuestionsFromDto(dto, category);

        repo.updateQuestionsInCategory(questionList, categoryId);

        Category updatedCategory =  repo.addScoreToCategory(score, categoryId);
        List<Question> responseQuestions = updatedCategory.getQuestions();
        updatedCategory.setQuestions(responseQuestions);
        return updatedCategory;
    }

    public Object submitScoreWithoutUser(QuizSubmitDTO dto, String categoryId) {
        Score score = ScoreConverter.createScoreFromDto(dto);

        Category category = repo.getCategoryById(categoryId).get();
        List<Question> questionList = ScoreConverter.createQuestionsFromDto(dto, category);

        repo.updateQuestionsInCategory(questionList, categoryId);

        Category updatedCategory =  repo.addScoreToCategory(score, categoryId);
        List<Question> responseQuestions = updatedCategory.getQuestions();
        updatedCategory.setQuestions(responseQuestions);
        return updatedCategory;
    }

    public List<Score> getScoreByUser(String email) {
        User user = userRepo.getByEmail(email);
        return user.getScores();
    }
}
