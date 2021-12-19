package com.example.demo.Donations;

import com.example.demo.Departments.Department;
import com.example.demo.Donors.Donor;

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
    private String img;

    //relationship many to one  between the donations and department
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "department_id")
    private Department department;

    //relationship many to one  between the donations and donor
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "donor_id")
    private Donor donor;

    public Donation() {
    }
    // use Constructor
    public Donation(int id, String description, int quantity, String date, String state, String img, Department department, Donor donor) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.date = date;
        this.state = state;
        this.img = img;
        this.department = department;
        this.donor = donor;
    }

    //use get and set
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Donor getDonor() {
        return donor;
    }

    public void setDonor(Donor donor) {
        this.donor = donor;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }



    //use toString
    @Override
    public String toString() {
        return "Donation{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", quantity=" + quantity +
                ", date='" + date + '\'' +
                ", state='" + state + '\'' +
                ", img='" + img + '\'' +
                ", department=" + department +
                ", donor=" + donor +
                '}';
    }
}
