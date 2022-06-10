package com.example.demo.User;

import com.example.demo.Admin.AdminRepository;
import com.example.demo.Charities.charityRepository;
import com.example.demo.Donors.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class UserService implements UserDetailsService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final DonorRepository donorrepository;
    private final charityRepository charityrepository;
    private final AdminRepository adminRepository;


    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, DonorRepository donorrepository, charityRepository charityrepository, AdminRepository adminRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.donorrepository = donorrepository;
        this.charityrepository = charityrepository;
        this.adminRepository = adminRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= userRepository.findByUserName(username);
        if(user == null){
            throw new UsernameNotFoundException("User not exist");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        authorities.add(new SimpleGrantedAuthority(user.getRole()));


        return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(),authorities);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User createUser(User user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void updateUser(String id){
        long longId = parseLong(id);
        User user = userRepository.findById(longId).orElse(null);
        userRepository.save(user);
    }
    public User getUser(String id){
        long user_id = Integer.parseInt(id);
        return userRepository.findById(user_id).orElse(null);
    }

    public int getRoleId(String userId, String role) {
        int role_id = -1;
        switch (role){
            case "donor":
                role_id = donorrepository.findByUser_id(Long.parseLong(userId)).getId();break;
            case "charity":
                role_id = charityrepository.findByUser_id(Long.parseLong(userId)).getId();break;

            case "admin":
                role_id = adminRepository.findByUser_id(Long.parseLong(userId)).getId();break;

            default:
                System.out.println("not found");
        }
        return role_id;
    }
}
