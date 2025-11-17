package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity

@Table(name = "Student3a")
@Data

public class Student {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    
    private Long id;
    private String name;
    private String course;
    private String email;
    private String section;
    


}


