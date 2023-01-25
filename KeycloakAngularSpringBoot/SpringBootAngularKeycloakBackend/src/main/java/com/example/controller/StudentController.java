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

    private List<Student> someStudents = List.of(
            new Student(1, "Ken"),
            new Student(2, "Yannick"),
            new Student(3, "Pieter"));

    @GetMapping
    @RolesAllowed("heroes-user")
    public List<Student> students() {
        return someStudents;
    }

    @GetMapping("/{id}")
    @RolesAllowed("heroes-admin")
    public Student getStudent(@PathVariable("id") String id) {
        return someStudents.stream()
                .filter(s -> Integer.toString(s.getId()).equals(id))
                .findFirst()
                .orElse(null);
    }
}

