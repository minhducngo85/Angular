package com.example.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.model.Student;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/heroes")
public class StudentController {

    private List<Student> someHeroes = List.of(
            new Student(1, "Ken"),
            new Student(2, "Yannick"),
            new Student(3, "Pieter"));

    @GetMapping
    @RolesAllowed("heroes-user")
    public List<Student> heroes() {
        return someHeroes;
    }

    @GetMapping("/{id}")
    @RolesAllowed("heroes-admin")
    public Student hero(@PathVariable("id") String id) {
        return someHeroes.stream()
                .filter(h -> Integer.toString(h.getId()).equals(id))
                .findFirst()
                .orElse(null);
    }
}

