package com.example.demo.Donors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {
    private final DonorRepository donorrepository;
    @Autowired
    public DonorService(DonorRepository donorrepository) {
        this.donorrepository = donorrepository;
    }

    // use get all donor
    public List<Donor> getDonors(){
        return donorrepository.findAll();
    }

    // use get one donor
    public Donor getDonor(String id){
        Integer donor_id = Integer.parseInt(id);
        return donorrepository.findById(donor_id).orElse(null);
    }
    //add or post all User
    public void addDonors(List<Donor> donors){
        for(int i = 0; i< donors.size(); i++){
            donorrepository.save(donors.get(i));}
    }

    //use to post and add one donor
    public Donor createDonor(Donor donor){
        return donorrepository.save(donor);

    }

    // use delete o remove user
    public void deleteDonor(String id ){
        Integer donor_id = Integer.parseInt(id);
        donorrepository.deleteById(donor_id);

    }

    //use update to can update
    public Donor updateDonor(String id, Donor data) {
        Integer donor_id = Integer.parseInt(id);
        Donor donor = donorrepository.findById(donor_id).orElse(null);
        if (donor != null) {
            donor.setFirstName(data.getFirstName());
            donor.setLastName(data.getLastName());
            donor.setPhoneNumber(data.getPhoneNumber());
            donor.setPassword(data.getPassword());
            donor.setLocation(data.getLocation());
            donorrepository.save(donor);
        }
        return donor;

    }}