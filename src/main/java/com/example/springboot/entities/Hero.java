package com.example.springboot.entities;

import org.springframework.stereotype.Controller;

import javax.persistence.*;

@Entity
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
