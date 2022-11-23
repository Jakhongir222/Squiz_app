package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.model.CorrectAnswer;
import com.example.squizajajanasbackend.model.Question;
import com.example.squizajajanasbackend.model.WrongAnswer;
import com.example.squizajajanasbackend.populate.FileReaderDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class FileReader {

    @Autowired
    private CategoryRepo repo;

    public void readJsonFileData(){
        String format = "data/data.json";
  
        ObjectMapper mapper = new ObjectMapper();

        try {
            URL resource = this.getClass().getClassLoader().getResource(format);
            byte[] bytes = new FileInputStream(resource.getPath()).readAllBytes();
            FileReaderDTO dto = mapper.readValue(bytes, FileReaderDTO.class);
            addFileContentToDatabase(dto);
        } catch (IOException | NullPointerException e) {
            e.printStackTrace();
        }
    }

    public void addFileContentToDatabase(FileReaderDTO dto) {
        String categoryId = UUID.randomUUID().toString();
        String questionId = UUID.randomUUID().toString();
        String answerId = UUID.randomUUID().toString();
        String wrongAnswerId = UUID.randomUUID().toString();

        CorrectAnswer answer = new CorrectAnswer(answerId, dto.answer());

        WrongAnswer wrongAnswer = new WrongAnswer(wrongAnswerId, dto.wrong_answers()[0]);
        List<WrongAnswer> wrongAnswerList = new ArrayList<>();
        wrongAnswerList.add(wrongAnswer);


        Question question = new Question(questionId, dto.question(), wrongAnswerList, answer);

        List<Question> questionList = new ArrayList<>();
        questionList.add(question);

        Category category = new Category(categoryId, dto.category(), questionList);

//        System.out.println("====================================================");
//        System.out.println(repo.getCategoryById("2"));
        repo.saveCategory(category);
//
//        System.out.println(category.getCategoryName());
//        System.out.println(question.getQuestion());
//        System.out.println(question.getCorrectAnswer());
    }
}
