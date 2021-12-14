package com.example.demo.departments;

import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private final departmentRepository departmentrepository;
    @Autowired
    public DepartmentService(departmentRepository departmentrepository) {
        this.departmentrepository = departmentrepository;
    }

    public List<Department> getDepartments(){

        return  departmentrepository.findAll();
    }
    public Department getDepartment(String id){
        Integer department_id = Integer.parseInt(id);
        return departmentrepository.findById(department_id).orElse(null);
    }
    public void addDepartments(List<Department> departments){
        for(int i=0;i<departments.size();i++){
            departmentrepository.save(departments.get(i));}
    }
    public Department addDepartment(Department department){

        return departmentrepository.save(department);
    }

    public void deleteDepartment(String id ){
        Integer department_id = Integer.parseInt(id);
        departmentrepository.deleteById(department_id );
    }


}
