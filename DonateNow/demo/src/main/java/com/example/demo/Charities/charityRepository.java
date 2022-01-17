package com.example.demo.Charities;


import com.example.demo.Admin.Admin;
import com.example.demo.Donations.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface charityRepository extends JpaRepository<Charity, Integer> {
//    Admin findByUser_id(long parseLong);

    Charity findByUser_id(long parseLong);

}
