package com.example.demo.Donations;

import com.example.demo.departments.Department;
import com.example.demo.user.User;

import javax.persistence.*;

@Entity
@Table(name="donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String description;
    private int quantity;
    private String date;
    private String state;


@ManyToOne(fetch = FetchType.EAGER, optional = true)
@JoinColumn(name = "department_id")
private Department department;

@ManyToOne(fetch = FetchType.EAGER, optional = true)
@JoinColumn(name = "user_id")
private User user;

    public Donation() {
    }

    public Donation(int id, String description, int quantity, String date, String state, Department department, User user) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.date = date;
        this.state = state;
        this.department = department;
        this.user = user;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
