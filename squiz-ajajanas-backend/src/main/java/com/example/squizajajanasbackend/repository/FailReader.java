package com.example.squizajajanasbackend.repository;

import com.example.squizajajanasbackend.model.Category;
import com.example.squizajajanasbackend.model.Info;
import com.example.squizajajanasbackend.model.Question;
import com.example.squizajajanasbackend.model.Answer;
import com.example.squizajajanasbackend.populate.FileReaderDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.*;

@Component
public class FailReader {
    @Autowired
    private CategoryRepo repo;

    public void readJsonFileData(){
        String format = "data/data.json";

        ObjectMapper mapper = new ObjectMapper();

        try {
            URL resource = this.getClass().getClassLoader().getResource(format);
            byte[] bytes = new FileInputStream(resource.getPath()).readAllBytes();
            List<FileReaderDTO> dtoList = mapper.readValue(bytes, new TypeReference<List<FileReaderDTO>>() {});

            addFileContentToDatabase(dtoList);

        } catch (IOException | NullPointerException e) {
            e.printStackTrace();
        }
    }

    public void addFileContentToDatabase(List<FileReaderDTO> dtoList) {

        Map<String, List<Question>> map = new HashMap<String, List<Question>>();

        dtoList.forEach(dto -> {

            List<Answer> answerList = Arrays.stream(dto.answers())
                    .map(answer-> new Answer(UUID.randomUUID().toString(), answer)).toList();


            List<Info> infoList = Arrays.stream((dto.info()))
                    .map(info -> new Info(UUID.randomUUID().toString(), info)).toList();

            String questionId = UUID.randomUUID().toString();
            Question question = new Question(questionId, dto.question(), answerList, infoList);


            if (map.containsKey(dto.category())){
                List<Question> mapList = map.get(dto.category());
                mapList.add(question);
                map.put(dto.category(), mapList);
            } else {
                List<Question> questionList = new ArrayList<>();
                questionList.add(question);
                map.put(dto.category(), questionList);
            }
        });

        map.forEach((key, value) -> {
            String id = UUID.randomUUID().toString();
            repo.saveCategory(new Category(id, key, value));
        });
    }
}
