package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepo;

@Service
public class StudentService {
// ioC-> with the help of spriing IoC we Transfer control
// of Object ceation and lifecycle to Spring container.   
@Autowired 
private StudentRepo repository;

public List<Student> getAllStudent(){
    return repository.findAll();
}

public Optional<Student> getStudentById(Long id){
    return repository.findById(id);
}



public Student createStudent(Student student){
    return repository.save(student);
}

// you have to create service for Delete and update operation



public Student updateStudentData(Long id, Student updatedData) {

        Student existingStudent = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student Not Found with ID: " + id));

        // Update fields
        existingStudent.setName(updatedData.getName());
        existingStudent.setEmail(updatedData.getEmail());
        //existingStudent.setPassword(updatedData.getPassWord());
        existingStudent.setCourse(updatedData.getCourse());

        return repository.save(existingStudent); // saves updated student
    }

    public void deleteStudentData(Long id) {

    Student student = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student Not Found with ID: " + id));

    repository.delete(student);
}

}