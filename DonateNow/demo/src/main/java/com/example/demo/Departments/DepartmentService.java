package com.example.demo.Departments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentrepository;
    @Autowired
    public DepartmentService(DepartmentRepository departmentrepository) {
        this.departmentrepository = departmentrepository;
    }
   //use get all department
    public List<Department> getDepartments(){

        return  departmentrepository.findAll();
    }
    //use get department
    public Department getDepartment(String id){
        Integer department_id = Integer.parseInt(id);
        return departmentrepository.findById(department_id).orElse(null);
    }

    //use add or post all departments
    public void addDepartments(List<Department> departments){
        for(int i=0;i<departments.size();i++){
            departmentrepository.save(departments.get(i));}
    }

    // use to add or post department
    public Department addDepartment(Department department){

        return departmentrepository.save(department);
    }

    //use delete department
    public void deleteDepartment(String id ){
        Integer department_id = Integer.parseInt(id);
        departmentrepository.deleteById(department_id );
    }


}
