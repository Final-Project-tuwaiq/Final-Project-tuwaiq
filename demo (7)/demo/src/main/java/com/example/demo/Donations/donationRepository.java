package com.example.demo.Donations;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface donationRepository extends JpaRepository<Donation, Integer> {
    List<Donation> findAllBydepartment_id(int department_id);

    List<Donation> findAllByuser_id(int user_id);
}
