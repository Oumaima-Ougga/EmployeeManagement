package com.example.employeemanagementsystem;

import com.example.employeemanagementsystem.model.Employee;
import com.example.employeemanagementsystem.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EmployeeManagementSystemApplication {

    public static void main(String[] args) {

        SpringApplication.run(EmployeeManagementSystemApplication.class, args);
    }
    @Bean
    CommandLineRunner start(EmployeeRepository employeeRepository){
        return args -> {
          employeeRepository.save(new Employee(null,"Firstname1","Lastname1","email1"));
            employeeRepository.save(new Employee(null,"Firstname2","Lastname2","email2"));
            employeeRepository.save(new Employee(null,"Firstname3","Lastname3","email3"));

        };
    }
}
