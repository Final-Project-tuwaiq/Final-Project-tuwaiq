package com.example.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User, Integer> {
}
