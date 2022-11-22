package com.example.squizajajanasbackend;

import com.example.squizajajanasbackend.repository.FileReader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SquizAjajanasBackendApplicationTests {

    @Autowired
    FileReader fr;

    @Test
    void contextLoads() {
    }

    @Test
    void shouldPrint() {
        fr.readJsonFileData();
    }
}
