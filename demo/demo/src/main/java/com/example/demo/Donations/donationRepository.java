package com.example.demo.Donations;

import org.springframework.data.jpa.repository.JpaRepository;

public interface donationRepository extends JpaRepository<Donation, Integer> {
}
