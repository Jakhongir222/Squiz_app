package com.example.squizajajanasbackend;

import com.example.squizajajanasbackend.repository.FailReader;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SquizAjajanasBackendApplicationTests {

    @Autowired
    FailReader fr;

    @Test
    void contextLoads() {
    }

    @Disabled
    @Test
    void shouldPrint() {
        fr.readJsonFileData();
    }
}
