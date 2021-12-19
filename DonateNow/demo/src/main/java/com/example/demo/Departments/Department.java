package com.example.demo.Departments;
import com.example.demo.Charities.Charity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;


@Entity
@Table(name="department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int amount;

    //relationship many to many  between the departments and charity
    @JsonIgnore
    @ManyToMany(mappedBy = "departments")
    private Collection<Charity> charities= new ArrayList<>();

    // use Constructor
    public Department(int id, String name, String description, int amount, Collection<Charity> charities) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.charities = charities;
    }

    public Department() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<Charity> getCharities() {
        return charities;
    }

    public void setCharities(Collection<Charity> charities) {
        this.charities = charities;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    //use toString
    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                ", charities=" + charities +
                '}';
    }
}
