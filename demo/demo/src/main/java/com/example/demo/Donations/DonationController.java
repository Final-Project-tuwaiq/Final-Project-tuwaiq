package com.example.demo.Donations;
import com.example.demo.departments.Department;
import com.example.demo.departments.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "donations")
public class DonationController {
    private final DonationService donationservice;

    @Autowired
    public DonationController(DonationService donationservice) {
        this.donationservice = donationservice;
    }
    @PostMapping
    public Donation addDonation(@RequestBody Donation donation){
        return donationservice.addDonation(donation);
    }

    @PostMapping ("/s")
    public List<Donation> addDonations(@RequestBody List<Donation> donations){
        donationservice.addDonations(donations);
        return getDonations();
    }

    @GetMapping
    public List<Donation> getDonations(){

        return donationservice.getDonations();
    }

    @DeleteMapping ("/{id}")
    public List<Donation> deletDonation(@PathVariable int id){
        donationservice.deletDonation(id);
        return getDonations();

    }
}
