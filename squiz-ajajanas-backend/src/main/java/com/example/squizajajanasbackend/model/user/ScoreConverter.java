package com.example.squizajajanasbackend.model.user;

import com.example.squizajajanasbackend.dto.QuizSubmitDTO;
import com.example.squizajajanasbackend.model.Answer;
import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.model.Question;
import com.example.squizajajanasbackend.model.Score;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ScoreConverter {

    public static Score createScoreFromDto (QuizSubmitDTO dto) {
        int score = 0;
        for (int i = 0; i < dto.questions().size(); i++) {
            if (dto.questions().get(i).getWrongAnswers().get(0).getAnswer().equals(dto.answers().get(i).getAnswer())){
                score++;
            }
        }
        return new Score(UUID.randomUUID().toString(), score);
    }

    public static List<Question> createQuestionsFromDto (QuizSubmitDTO dto, Category category) {


        List<Question> questionList = new ArrayList<>();
        for (int i = 0; i < dto.questions().size(); i++) {
            Question question = dto.questions().get(i);

            Question oldquestion = category.getQuestions().stream()
                    .filter(q -> q.getQuestionId().equals(question.getQuestionId()))
                    .findFirst().get();

            int answerIsCorrect = 0;
            if (question.getWrongAnswers().get(0).getAnswer().equals(dto.answers().get(i).getAnswer())){
                answerIsCorrect = 1;
            }

            questionList.add(new Question(
                    question.getQuestionId(),
                    question.getQuestion(),
                    question.getWrongAnswers(),
                    oldquestion.getCorrectAnswersGiven() + answerIsCorrect,
                    oldquestion.getTotalAnswersGiven() + 1));

        }

        return questionList;
    }

}
