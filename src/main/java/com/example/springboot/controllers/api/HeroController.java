package com.example.springboot.controllers.api;

import com.example.springboot.entities.Hero;
import com.example.springboot.mytest.HeroHeroDTOMapper;
import com.example.springboot.repositories.HereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
//@RequiredArgsConstructor
@RequestMapping("/api")
public class HeroController {
    private final HereRepository heroRepository;
    private final HeroHeroDTOMapper heroHeroDTOMapper;

    @Autowired
    public HeroController(HereRepository heroRepository, HeroHeroDTOMapper heroDTOMapper) {
        this.heroRepository = heroRepository;
        this.heroHeroDTOMapper = heroDTOMapper;
    }


    @GetMapping("/heroes")
    public List<Hero> index() {
        return (List<Hero>) heroRepository.findAll();
    }

    @GetMapping("/heroes/{id}")
    public ResponseEntity<Hero> getHeroesById(@PathVariable("id") int id) {
        Optional<Hero> hero = heroRepository.findById(id);

        if (hero.isPresent()) {
            return new ResponseEntity<>(hero.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/heroes")
    public ResponseEntity<Hero> createHero(@RequestBody Hero hero) {
        try {
            Hero heroAdd = heroRepository.save(new Hero(hero.getName()));
            return new ResponseEntity<>(heroAdd, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
