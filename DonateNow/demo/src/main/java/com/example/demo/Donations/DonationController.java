
package com.example.demo.Donations;
import com.example.demo.Departments.Department;
import com.example.demo.Departments.DepartmentService;
import com.example.demo.Donors.Donor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "donations")
@CrossOrigin("*")
public class DonationController {
    private final DonationService donationService;

    @Autowired
    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    //post donations
    @PostMapping
    public Donation addDonation(@RequestBody Donation donation){

        return donationService.addDonation(donation);
    }

    //get all donations
    @GetMapping
    public List<Donation> getDonations(){

        return donationService.getDonations();
    }

    //get donation by ID
    @GetMapping("/{id}")
    public Donation getDonation(@PathVariable String id){
        return donationService.getDonation(id);

    }
    //get donation in department by ID
    @GetMapping ("department/{id}")
    public List<Donation> getDepartmentDonations(@PathVariable int id){
        return donationService.getDepartmentDonations(id);
    }

    //get donation by ID
    @DeleteMapping ("/{id}")
    public void deleteDonation(@PathVariable String id){
        donationService.deleteDonation(id);
    }

    //update donation by ID
    @PutMapping("/{id}")
    public Donation updateDonation(@PathVariable String id, @RequestBody Donation data){
        return donationService.updateDonation(id, data);
    }}





