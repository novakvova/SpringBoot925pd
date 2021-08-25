package com.example.springboot.entities;

import lombok.Data;
import org.springframework.stereotype.Controller;

import javax.persistence.*;

@Entity
@Data
public class Hero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 255, nullable = false)
    private String name;

    public Hero() {
    }

    public Hero(String name) {
        this.name = name;
    }

}
