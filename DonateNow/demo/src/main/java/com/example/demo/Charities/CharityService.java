package com.example.demo.Charities;
import com.example.demo.Departments.Department;
import com.example.demo.Departments.DepartmentRepository;
import com.example.demo.Donations.Donation;
import com.example.demo.Donations.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service

public class CharityService {
    private final charityRepository charityrepository;
    private final DepartmentRepository departmentRepository;
    private final DonationRepository donationrepository;


    @Autowired
    public CharityService(charityRepository charityrepository, DepartmentRepository departmentRepository, DonationRepository donationrepository) {
        this.charityrepository = charityrepository;
        this.departmentRepository=departmentRepository;
        this.donationrepository = donationrepository;
    }

    //get all charity
    public List<Charity> getCharities(){
        return charityrepository.findAll();
    }

    //get charity
    public Charity getCharity(String id){
        Integer charity_id = Integer.parseInt(id);
        return charityrepository.findById(charity_id).orElse(null);
    }

    //post or add all charity
    public void addCharities(List<Charity> charities){
        for(int i=0;i<charities.size();i++){
            charityrepository.save(charities.get(i));}
    }

    // post or add charity with departments
    public Charity createCharity(Charity charity){
      // Collection<Department> depts = d
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

    //delete charity
    public void deleteCharity(String id ){
        Integer charity_id = Integer.parseInt(id);
        charityrepository.deleteById(charity_id);
    }
    // use update charity
    public Charity updateCharity(String id, Charity data) {
        Integer charity_id = Integer.parseInt(id);
        Charity charity = charityrepository.findById(charity_id).orElse(null);
        if (charity != null) {
            charity.setName(data.getName());
            charity.setPhoneNumber(data.getPhoneNumber());
            charity.setLocation(data.getLocation());
            charityrepository.save(charity);
        }
        return charity;

    }

    public Charity getCharityByUser(String userId) {
        return charityrepository.findByUser_id(Long.parseLong(userId));
    }


    public List<Donation> getCharityDonations(int id) {
       return  donationrepository.findAllBycharity_id(id);
    }
}
