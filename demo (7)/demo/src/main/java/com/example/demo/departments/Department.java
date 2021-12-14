package com.example.demo.departments;


import com.example.demo.charities.Charity;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;


@Entity
@Table(name="departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

    @JsonIgnore
    @ManyToMany(mappedBy = "departments")
    private Collection<Charity> charities= new ArrayList<>();

    public Department(int id, String name, String description, Collection<Charity> charities) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.charities = charities;
    }

    public Department() {
    }

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

}
