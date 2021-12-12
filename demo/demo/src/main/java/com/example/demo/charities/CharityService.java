package com.example.demo.charities;

import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CharityService {
    private final charityRepository charityrepository;

    @Autowired
    public CharityService(charityRepository charityrepository) {
        this.charityrepository = charityrepository;
    }

    public List<Charity> getCharities(){
        return charityrepository.findAll();
    }

    public Charity getCharity(String id){
        Integer user_id = Integer.parseInt(id);

        return charityrepository.findById(user_id).orElse(null);
    }
    public void addCharities(List<Charity> charities){
        for(int i=0;i<charities.size();i++){
            charityrepository.save(charities.get(i));}
    }
    public Charity createCharity(Charity charity){
        return charityrepository.save(charity);

    }
    public void deleteCharity(String id ){
        Integer charity_id = Integer.parseInt(id);
        charityrepository.deleteById(charity_id);

    }
    public Charity updateCharity(String id, Charity data) {
        Integer charity_id = Integer.parseInt(id);

        Charity charity = charityrepository.findById(charity_id).orElse(null);

        if (charity != null) {


            charity.setName(data.getName());
            charity.setPhoneNumber(data.getPhoneNumber());
            charity.setPassword(data.getPassword());
            charity.setLocation(data.getLocation());
            charityrepository.save(charity);
        }
        return charity;

    }}
