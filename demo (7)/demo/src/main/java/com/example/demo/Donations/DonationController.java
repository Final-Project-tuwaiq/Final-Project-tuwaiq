package com.example.demo.Donations;
import com.example.demo.departments.Department;
import com.example.demo.departments.DepartmentService;
import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "donations")
public class DonationController {
    private final DonationService donationService;

    @Autowired
    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }
    @PostMapping
    public Donation addDonation(@RequestBody Form form){
        return donationService.addDonation(form.getDonation(), form.getDepartmentId(),form.getUserId());
    }
    @GetMapping
    public List<Donation> getDonations(){

        return donationService.getDonations();
    }
//    \\\\\\\\\
    @GetMapping("/{id}")
    public Donation getDonation(@PathVariable String id){
        return donationService.getDonation(id);

    }
    //    \\\\\\\\\

    @DeleteMapping ("/{id}")
    public void deleteDonation(@PathVariable String id){
        donationService.deleteDonation(id);
    }

    @PutMapping("/{id}")
    public Donation updateDonation(@PathVariable String id, @RequestBody Donation data){
        return donationService.updateDonation(id, data);
    }

//    @GetMapping("/{id}")
//    public Donation getDonation(@PathVariable String id ){
//        return donationService.getAppointment(id);
//    }
//







//

//
//    @PutMapping("/{id}")
//    public Donation UpdateState(@PathVariable String id, @RequestBody Donation donation) {
//        return donationService.UpdateState(id,donation);
//    }
}

class Form{
    private Donation donation;
    private int departmentId;
    private int userId;


    public int getDepartmentId() {
        return departmentId;
    }

    public Donation getDonation() {
        return donation;
    }

    public int getUserId() {
        return userId;
    }
}


