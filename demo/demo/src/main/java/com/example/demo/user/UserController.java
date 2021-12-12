package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path= "users")
public class UserController {
    private final UserService userservice;

    @Autowired
    public UserController(UserService userservice) {
        this.userservice = userservice;
    }

    @GetMapping
    public List<User> getUsers(){
        return userservice.getUsers();

    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id){
        return userservice.getUser(id);

    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userservice.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id){
        userservice.deleteUser(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User data){
        return userservice.updateUser(id, data);
    }

    @PostMapping ("/s")
    public List<User> addUsers(@RequestBody List<User> users){
        userservice.addUsers(users);
        return getUsers();
    }


}
