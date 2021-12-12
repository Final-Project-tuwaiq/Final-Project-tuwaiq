package com.example.demo.Donations;
import com.example.demo.departments.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class DonationService {
    private final donationRepository donationrepository;
    @Autowired
    public DonationService(donationRepository donationrepository) {
        this.donationrepository = donationrepository;
    }

    public Donation addDonation(Donation donation){

        return donationrepository.save(donation);
    }

    public void addDonations(List<Donation> donations){
        for(int i=0;i<donations.size();i++){
            donationrepository.save(donations.get(i));}
    }

    public List<Donation> getDonations(){

        return  donationrepository.findAll();
    }
    public void deletDonation(int id){

        donationrepository.deleteById(id);
    }

}
