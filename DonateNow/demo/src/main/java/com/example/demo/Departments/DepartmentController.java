package com.example.demo.Departments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "departments")
public class DepartmentController {
    private final DepartmentService departmentservice;

    @Autowired
    public DepartmentController(DepartmentService departmentservice) {
        this.departmentservice = departmentservice;
    }

    //use get all departments
    @GetMapping
    public List<Department> getDepartments(){
        return departmentservice.getDepartments();
    }

    //use get department by ID
    @GetMapping("/{id}")
    public Department getDepartment(@PathVariable String id){
        return departmentservice.getDepartment(id);
    }

    //use post department
    @PostMapping
    public Department addDepartment(@RequestBody Department department){
        return departmentservice.addDepartment(department);
    }

    // use post all department
    @PostMapping ("/s")
    public List<Department> addDepartments(@RequestBody List<Department> departments){
        departmentservice.addDepartments(departments);
        return getDepartments();
    }

    //delete department by ID
    @DeleteMapping ("/{id}")
    public void deleteDepartment(@PathVariable String id){
        departmentservice.deleteDepartment(id);
    }
}
