package com.example.demo.Charities;

import com.example.demo.Departments.Department;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "charities")
public class Charity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String phoneNumber;
    private String password;
    private String location;

    //relationship many to many  between the charities and departments
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Department> departments = new ArrayList<>();

    //use Constructor
    public Charity(int id, String name, String phoneNumber, String password, String location, List<Department> departments) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.location = location;
        this.departments = departments;
    }

    public Charity() {
    }

    //use get and set
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }

  //use toString
    @Override
    public String toString() {
        return "Charity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", password='" + password + '\'' +
                ", location='" + location + '\'' +
                ", departments=" + departments +
                '}';
    }
}
