package com.example.springboot.mytest;

import com.example.springboot.entities.Hero;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring"
)
public interface HeroHeroDTOMapper {
    Hero create(HeroDTO request);
}
