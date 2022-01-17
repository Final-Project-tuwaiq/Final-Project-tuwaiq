package com.example.demo.Departments;

import com.example.demo.Donations.Donation;
import com.example.demo.Donations.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentrepository;
    private final DonationRepository donationrepository;

    @Autowired
    public DepartmentService(DepartmentRepository departmentrepository, DonationRepository donationrepository) {
        this.departmentrepository = departmentrepository;
        this.donationrepository = donationrepository;
    }
   //use get all department with amount
    public List<Department> getDepartments(){

        List<Department>  departmentList = departmentrepository.findAll();
        for (Department i : departmentList){
            i.setAmount(computeAmount(i));
            departmentrepository.save(i);
        }
        //set amount for each dept
        return departmentrepository.findAll();
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

    // calculate donations amount
    public int computeAmount(Department department){
        int dept_id = department.getId();
        List <Donation> donationList = donationrepository.findAllBydepartment_id(dept_id);
        int amountOfDonations  = 0;
        for ( Donation i : donationList){
            amountOfDonations += i.getQuantity();
        }
        return amountOfDonations;
    }

}
