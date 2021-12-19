package com.example.demo.Charities;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface charityRepository extends JpaRepository<Charity, Integer> {
}
