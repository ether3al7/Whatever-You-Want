package com.techelevator.controller;

import com.techelevator.dao.RestaurantsDao;
import com.techelevator.model.Restaurants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping(path = "/restaurants")
@PreAuthorize("isAuthenticated()")
public class RestaurantController {

    @Autowired
    private RestaurantsDao restaurantsDao;

    @GetMapping(path = "/all")
    public List<Restaurants> getAllRestaurants() throws Exception {
        List<Restaurants> restaurants = null;
        restaurants = restaurantsDao.findAllRestaurants();
        return restaurants;
    }
    @GetMapping(path = "/{zipcode}")
    public List<Restaurants> getByZipcode(@PathVariable Integer zipcode) throws Exception {
        List<Restaurants> restaurants = null;
        restaurants = restaurantsDao.findByZipcode(zipcode);
        return restaurants;
    }

}
