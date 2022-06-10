package com.example.demo.Donations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Integer> {
    List<Donation> findAllBydepartment_id(int department_id);

    List<Donation> findAllBydonor_id(int donor_id);
    List<Donation> findAllBycharity_id (int charity_id);
}
