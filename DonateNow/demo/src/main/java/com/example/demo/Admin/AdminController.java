package com.example.demo.Admin;

//
//import com.example.demo.Role.Role;
//import com.example.demo.Role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "admin")
@CrossOrigin("*")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping
    public Admin saveRole(@RequestBody Admin admin){
        return adminService.saveAdmin(admin);
    }

    @GetMapping
    public List<Admin> getAdmin(){
        return adminService.getAdmin();
    }
}

