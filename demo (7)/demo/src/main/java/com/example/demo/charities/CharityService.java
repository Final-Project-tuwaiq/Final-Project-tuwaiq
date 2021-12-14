package com.example.demo.charities;

import com.example.demo.departments.Department;
import com.example.demo.departments.departmentRepository;
import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service

public class CharityService {
    private final charityRepository charityrepository;
    private final departmentRepository departmentRepository;

    @Autowired
    public CharityService(charityRepository charityrepository ,departmentRepository departmentRepository) {
        this.charityrepository = charityrepository;
        this.departmentRepository=departmentRepository;
    }

    public List<Charity> getCharities(){
        return charityrepository.findAll();
    }

    public Charity getCharity(String id){
        Integer user_id = Integer.parseInt(id);

        return charityrepository.findById(user_id).orElse(null);
    }
    public void addCharities(List<Charity> charities){
        for(int i=0;i<charities.size();i++){
            charityrepository.save(charities.get(i));}
    }
    public Charity createCharity(Charity charity){
//        Collection<Department> depts = d
        List<Department> oldList = charity.getDepartments();
        List<Department> newList = new ArrayList<>();
        // loop over list
        for(int i=0;i<oldList.size();i++){
           int id =  oldList.get(i).getId();
            Department d = departmentRepository.findById(id).orElse(null);
            newList.add(d);
        }
        // pick obj access id
        // find by id to retrive obj with complete info
        // add complete obj to new list
        charity.setDepartments( newList );
        return charityrepository.save(charity);

    }
    public void deleteCharity(String id ){
        Integer charity_id = Integer.parseInt(id);
        charityrepository.deleteById(charity_id);

    }
    public Charity updateCharity(String id, Charity data) {
        Integer charity_id = Integer.parseInt(id);

        Charity charity = charityrepository.findById(charity_id).orElse(null);

        if (charity != null) {


            charity.setName(data.getName());
            charity.setPhoneNumber(data.getPhoneNumber());
            charity.setPassword(data.getPassword());
            charity.setLocation(data.getLocation());
            charityrepository.save(charity);
        }
        return charity;

    }

//    public Charity addDeptoCharity(int c_id, int d_id) {
//
//        Charity charity = charityrepository.findById(c_id).get();
//        Department department = departmentRepository.findById(d_id).get();
//        charity.adddep(department);
//        return charityrepository.save(charity);
//    }
}
