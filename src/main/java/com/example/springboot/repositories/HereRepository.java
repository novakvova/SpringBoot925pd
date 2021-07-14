package com.example.springboot.repositories;

import com.example.springboot.entities.Hero;
import org.springframework.data.repository.CrudRepository;

public interface HereRepository extends CrudRepository<Hero, Integer> {
}
