package com.example.springboot.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class BadAuthResponce {
    private String message;

    public BadAuthResponce(String message) {
        this.message = message;
    }
}
