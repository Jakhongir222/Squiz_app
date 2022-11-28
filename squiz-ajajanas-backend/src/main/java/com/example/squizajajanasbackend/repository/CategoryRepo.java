package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.dto.CategoryLiteDTO;
import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.model.Question;
import com.example.squizajajanasbackend.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class CategoryRepo {

    @Autowired
    private JPACategoryRepo repo;

    public Optional<Category> getCategoryById(String categoryId) {
        return repo.findById(categoryId);
    }
    public Object getTheCategories(){
        List<String> ids = repo.findCategoryIds();
        List<String> names = repo.findCategoryNames();

        List<CategoryLiteDTO> dtos = new ArrayList<>();
        for (int i = 0; i < ids.size(); i++) {
            dtos.add(new CategoryLiteDTO(ids.get(i), names.get(i)));
        }
        return dtos;
    }

    public void saveCategory(Category category) {
      repo.save(category);
  }

    public Category addScoreToCategory(Score score, String categoryId) {
        Category category = getCategoryById(categoryId).orElseThrow();
        List<Score> scores = category.getScores();
        scores.add(score);
        category.setScores(scores);
        return repo.save(category);
    }

    public void updateQuestionsInCategory(List<Question> quizQuestions, String categoryId) {
        Category category = getCategoryById(categoryId).orElseThrow();
        List<Question> questions = category.getQuestions();
        List<Question> updatedQuestions = new ArrayList<>();
        quizQuestions.forEach(q -> System.out.println(q.getQuestionId()));
        questions.forEach(q -> System.out.println(q.getQuestionId()));


        outer:
        for(Question catq : questions){
            for(Question quiq : quizQuestions) {
                if (catq.getQuestionId().equals(quiq.getQuestionId())){
                    updatedQuestions.add(quiq);
                    System.out.println("8142874981274817249127947129741972492711497");
                    continue outer;
                }
            }
            updatedQuestions.add(catq);
        }

        updatedQuestions.forEach(q->System.out.println(q.getCorrectAnswersGiven()));

        category.setQuestions(updatedQuestions);

        System.out.println(category);

        repo.save(category);

    }
}
