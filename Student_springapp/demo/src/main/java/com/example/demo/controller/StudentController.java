package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/")
public class StudentController {

    @Autowired
    private StudentService studentservice;

    @PostMapping("/student")
    public Student createStudentData(@RequestBody Student student){
          return studentservice.createStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudent(){

        return  studentservice.getAllStudent();
        
    }

    // UPDATE Student
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
        return studentservice.updateStudentData(id, student);
    }

    //Delete Students
    @DeleteMapping("/{id}")
public String deleteStudent(@PathVariable Long id) {
    studentservice.deleteStudentData(id);
    return "Student deleted with ID: " + id;
}
}
