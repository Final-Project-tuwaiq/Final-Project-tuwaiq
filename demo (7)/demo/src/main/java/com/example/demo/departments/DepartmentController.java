package com.example.demo.departments;

import com.example.demo.user.User;
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

    @GetMapping
    public List<Department> getDepartments(){

        return departmentservice.getDepartments();
    }
    @GetMapping("/{id}")
    public Department getDepartment(@PathVariable String id){
        return departmentservice.getDepartment(id);

    }
    @PostMapping
    public Department addDepartment(@RequestBody Department department){
        return departmentservice.addDepartment(department);
    }

    @PostMapping ("/s")
    public List<Department> addDepartments(@RequestBody List<Department> departments){
        departmentservice.addDepartments(departments);
        return getDepartments();
    }




    @DeleteMapping ("/{id}")
    public void deleteDepartment(@PathVariable String id){
        departmentservice.deleteDepartment(id);

    }
}
