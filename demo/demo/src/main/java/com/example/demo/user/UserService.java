package com.example.demo.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final userRepository userrepository;
    @Autowired
    public UserService(userRepository userrepository) {
        this.userrepository = userrepository;
    }
    public List<User> getUsers(){
        return userrepository.findAll();
    }
    public User getUser(String id){
        Integer user_id = Integer.parseInt(id);

        return userrepository.findById(user_id).orElse(null);
    }
    public void addUsers(List<User> users){
        for(int i=0;i<users.size();i++){
            userrepository.save(users.get(i));}
    }
    public User createUser(User user){
        return userrepository.save(user);

    }
    public void deleteUser(String id ){
        Integer user_id = Integer.parseInt(id);
        userrepository.deleteById(user_id);

    }
    public User updateUser(String id, User data) {
        Integer user_id = Integer.parseInt(id);

        User user = userrepository.findById(user_id).orElse(null);

        if (user != null) {


            user.setFirstName(data.getFirstName());
            user.setLastName(data.getLastName());
            user.setPhoneNumber(data.getPhoneNumber());
            user.setPassword(data.getPassword());
            user.setLocation(data.getLocation());
            userrepository.save(user);
        }
        return user;

    }}