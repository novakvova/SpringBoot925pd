package com.example.springboot.loader;

import com.example.springboot.entities.Hero;
import com.example.springboot.repositories.HereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final HereRepository repository;

    @Autowired
    public DatabaseLoader(HereRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        if(this.repository.count()==0) {
            this.repository.save(new Hero("Геркулес"));
            this.repository.save(new Hero("Вандам"));
            this.repository.save(new Hero("Бетмен"));
        }

    }
}
