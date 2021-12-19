package com.example.demo.Donors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path= "donors")
@CrossOrigin("*")
public class DonorController {
    private final DonorService donorservice;

    @Autowired
    public DonorController(DonorService donorservice) {
        this.donorservice = donorservice;
    }

   //Get all donors
    @GetMapping
    public List<Donor> getDonors(){
        return donorservice.getDonors();

    }

    //Get one donor by ID
    @GetMapping("/{id}")
    public Donor getDonor(@PathVariable String id){
        return donorservice.getDonor(id);
    }

    //post one donor
    @PostMapping
    public Donor createDonor(@RequestBody Donor donor){
        return donorservice.createDonor(donor);
    }

    //post all donors
    @PostMapping ("/s")
    public List<Donor> addDonors(@RequestBody List<Donor> donors){
        donorservice.addDonors(donors);
        return getDonors();
    }

    //update donor
    @PutMapping("/{id}")
    public Donor updateDonor(@PathVariable String id, @RequestBody Donor data){
        return donorservice.updateDonor(id, data);
    }

    //delete donor
    @DeleteMapping("/{id}")
    public void deleteDonor(@PathVariable String id){
        donorservice.deleteDonor(id);
    }

}
