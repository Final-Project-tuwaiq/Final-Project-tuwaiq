package com.example.demo.Donations;
import com.example.demo.Departments.Department;
import com.example.demo.Departments.DepartmentRepository;
import com.example.demo.Donors.Donor;
import com.example.demo.Donors.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService {
    private final DonationRepository donationrepository;
    private final DonorRepository donorrepository;
    private final DepartmentRepository departmentrepository;
    @Autowired
    public DonationService(DonationRepository donationrepository, DonorRepository donorrepository, DepartmentRepository departmentrepository) {
        this.donationrepository = donationrepository;
        this.donorrepository = donorrepository;
        this.departmentrepository = departmentrepository;
    }

    // Post donations with donor and department
    public Donation addDonation(Donation donation){
        int department_id = donation.getDepartment().getId();
        int donor_id = donation.getDonor().getId();
        Department department=departmentrepository.findById(department_id).orElse(null);
        Donor donor=donorrepository.findById(donor_id).orElse(null);
        donation.setDepartment(department);
        donation.setDonor(donor);
        return donationrepository.save(donation);
    }

    //get  all doantion
    public List<Donation> getDonations(){
        return donationrepository.findAll();
    }
    //get  one donation
    public Donation getDonation(String id){
        Integer donation_id = Integer.parseInt(id);
        return donationrepository.findById(donation_id).orElse(null);
    }

    // get donation in department
    public List<Donation> getDonationDepartment(int departmentId){
        return donationrepository.findAllBydepartment_id( departmentId);
    }


    public List<Donation> getDonationDonor(int donorId){
        return donationrepository.findAllBydonor_id( donorId);
    }

    //post or add donation
    public Donation createDonation(Donation donation){
        return donationrepository.save(donation);

    }

    // delate donation
    public void deleteDonation(String id){
        Integer donation_id = Integer.parseInt(id);
        donationrepository.deleteById(donation_id);
    }


    //update donations
    public Donation updateDonation(String id, Donation data) {
        Integer donation_id = Integer.parseInt(id);
        Donation donation = donationrepository.findById(donation_id).orElse(null);
        if (donation != null) {

            donation.setState(data.getState());

            donationrepository.save(donation);
        }
        return donation;

    }
     //get donation
    public List<Donation> getDepartmentDonations(int department_id){
        return donationrepository.findAllBydepartment_id(department_id);
    }







}





