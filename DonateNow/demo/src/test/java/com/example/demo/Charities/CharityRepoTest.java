package com.example.demo.Charities;


import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class CharityRepoTest {

    private final charityRepository charityrepository;
    private final UserRepository userRepository;


    @Autowired
    public CharityRepoTest(charityRepository charityrepository, UserRepository userRepository) {
        this.charityrepository = charityrepository;
        this.userRepository = userRepository;
    }

    @Test
    void itShouldSaveCharity() {
        User user = new User(1L, "gh1", "123456");
        userRepository.save(user);
        Charity Charity = new Charity(1, "Ghadeer", "0546999999", "Jeddah", user);
        Charity result = charityrepository.save(Charity);
        assertTrue(result.getId() != 0);
    }

    @Test
    void itShouldFindCharity() {
        User user = new User(1L, "gh1", "123456");
        userRepository.save(user);
        Charity charity = new Charity(1, "Ghadeer", "0546999999", "Jeddah", user);
        Charity savedCharity = charityrepository.save(charity);
        Charity result = charityrepository.findById(savedCharity.getId()).orElse(null);
        assertNotNull(result);
    }

    @Test
    void itShouldUpdateCharity() {
        User user = new User(1L, "gh1", "123456");
        userRepository.save(user);
        String oldName = "Ghadeer";
        Charity charity = new Charity(1,oldName , "0546999999", "Jeddah", user);
        charityrepository.save(charity);

        String newName = "Amal";
        charity.setName(newName);
        charityrepository.save(charity);
        assertEquals(charity.getName(), newName );
    }

//    @Test
//    void itShouldDeleteCharity() {
//        User user = new User(1L, "gh1", "123456");
//        Charity charity = new Charity(1, "Ghadeer", "0546999999", "Jeddah", user);
//        charityrepository.save(charity);
//        charityrepository.delete(charity);
//        Charity result = charityrepository.findById(charity.getId()).orElse(null);
//        assertNull(result);
//    }
}