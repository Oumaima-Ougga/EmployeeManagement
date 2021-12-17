package com.example.employeemanagementsystem.controller;

import com.example.employeemanagementsystem.exception.RessourceNotFoundException;
import com.example.employeemanagementsystem.model.Employee;
import com.example.employeemanagementsystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    @RequestMapping(value= "/api/v1/**", method=RequestMethod.OPTIONS)
    public void corsHeaders(HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.addHeader("Access-Control-Allow-Headers", "origin, content-type, accept, x-requested-with");
    }
    //Get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //Add employee
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee e = employeeRepository.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee doesn't exist with id :" + id));
        e.setFirstName(employee.getFirstName());
        e.setLastName(employee.getLastName());
        e.setEmailId(employee.getEmailId());
        Employee updateEmployee = employeeRepository.save(e);
        return ResponseEntity.ok(updateEmployee);
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee e = employeeRepository.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee doesn't exist with id :" + id));
        return ResponseEntity.ok(e);
    }


    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        Employee e = employeeRepository.findById(id).orElseThrow(()-> new RessourceNotFoundException("Employee doesn't exist with id :" + id));
        employeeRepository.delete(e);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
