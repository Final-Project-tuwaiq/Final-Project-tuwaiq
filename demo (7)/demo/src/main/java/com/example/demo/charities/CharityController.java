package com.example.demo.charities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path= "charities")
public class CharityController {
    private final CharityService charityservice;

    @Autowired
    public CharityController(CharityService charityservice) {
        this.charityservice = charityservice;
    }

    @GetMapping
    public List<Charity> getCharities(){
        return charityservice.getCharities();
    }

    @GetMapping("/{id}")
    public Charity getCharity(@PathVariable String id){
        return charityservice.getCharity(id);

    }

    @PostMapping
    public Charity createCharity(@RequestBody Charity charity){
        return charityservice.createCharity(charity);
    }

    @PostMapping ("/s")
    public List<Charity> addCharities(@RequestBody List<Charity> charities){
        charityservice.addCharities(charities);
        return getCharities();
    }

    @DeleteMapping("/{id}")
    public void deleteCharity(@PathVariable String id){
        charityservice.deleteCharity(id);
    }

    @PutMapping("/{id}")
    public Charity updateCharity(@PathVariable String id, @RequestBody Charity data){
        return charityservice.updateCharity(id, data);
    }


//    @PutMapping("{C_Id/dep/{d_id")
//    public Charity addDeptoCharity(@RequestBody @PathVariable int C_Id, @PathVariable int d_id){
//        return charityservice.addDeptoCharity(C_Id,d_id);
//    }
}
