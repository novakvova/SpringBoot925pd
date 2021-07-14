package com.example.springboot.controllers.api;

import com.example.springboot.entities.Hero;
import com.example.springboot.repositories.HereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HeroController {
    private final HereRepository heroRepository;

    @Autowired
    public HeroController(HereRepository heroRepository) {
        this.heroRepository = heroRepository;
    }
    @GetMapping("/hero")
    public List<Hero> index() {
        return (List<Hero>) heroRepository.findAll();
    }
}
