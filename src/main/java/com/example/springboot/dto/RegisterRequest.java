package com.example.springboot.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
public class RegisterRequest {

    @NotNull
    @Email
    private String username;
    @NotNull
    private String password;
    @NotNull
    private String confirmPassword;
    @NotNull
    private String fullName;
}
