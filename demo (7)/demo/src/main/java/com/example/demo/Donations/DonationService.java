package com.example.demo.Donations;
import com.example.demo.departments.Department;
import com.example.demo.departments.departmentRepository;
import com.example.demo.user.User;
import com.example.demo.user.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DonationService {
    private final donationRepository donationrepository;
    private final userRepository userrepository;
    private final departmentRepository departmentrepository;
    @Autowired
    public DonationService(donationRepository donationrepository, userRepository userrepository, departmentRepository departmentrepository) {
        this.donationrepository = donationrepository;
        this.userrepository = userrepository;
        this.departmentrepository = departmentrepository;
    }
    public Donation addDonation(Donation donation, int department_id , int user_id){

        Department department=departmentrepository.findById(department_id).orElse(null);
        User user=userrepository.findById(user_id).orElse(null);

        donation.setDepartment(department);
        donation.setUser(user);
        return donationrepository.save(donation);
    }
    public List<Donation> getDonations(){
        return donationrepository.findAll();
    }

    public Donation getDonation(String id){
        Integer donation_id = Integer.parseInt(id);
        return donationrepository.findById(donation_id).orElse(null);
    }

    public List<Donation> getDonationDepartment(int departmentId){
        return donationrepository.findAllBydepartment_id( departmentId);
    }
    public List<Donation> getDonationUser(int userId){
        return donationrepository.findAllByuser_id( userId);
    }

    public Donation createDonation(Donation donation){
        return donationrepository.save(donation);

    }

    public void deleteDonation(String id){
        Integer donation_id = Integer.parseInt(id);
        donationrepository.deleteById(donation_id);
    }

//    public Donation UpdateState(String id , Donation donationState){
//        int Id = Integer.parseInt(id);
//        Donation donation = donationrepository.findById(Id).orElse(null);
//        if (donation != null){
//            donation.setState(donationState.getState());
//            donationrepository.save(donation);
//        }
//        return donation;
//    }
public Donation updateDonation(String id, Donation data) {
    Integer donation_id = Integer.parseInt(id);

    Donation donation = donationrepository.findById(donation_id).orElse(null);

    if (donation != null) {


        donation.setState(data.getState());

        donationrepository.save(donation);
    }
    return donation;

}

//    public List<Donation> getDepartmentDonation(int department_id){
//        return donationRepository.findAllBydepartment_id(department_id);
//    }




//    public String deleteDonation(String id){
//        int Id = Integer.parseInt(id);
//        donationRepository.deleteById(Id);
//        return "deleted";
//    }
//    public Donation addUserToDonation(int donationId, int userId) {
//        Donation donation = donationRepository.findById(donationId).get();
//        User user = userrepository.findById(userId).get();
//        donation.setUser(user);
//        return donationRepository.save(donation);
//    }
//
//    public Donation addDepartmentToDonation(int donationId, int departmentId) {
//        Donation donation = donationRepository.findById(donationId).get();
//       Department department= departmentrepository.findById(departmentId).get();
//        donation.setDepartment(department);
//        return donationRepository.save(donation);
//    }




//    public Donation UpdateState(String id , Donation donationState){
//        int Id = Integer.parseInt(id);
//        Donation donation = donationrepository.findById(Id).orElse(null);
//        if (donation != null){
//            donation.setState(donationState.getState());
//            donationrepository.save(donation);
//        }
//        return donation;
//    }





}
