package com.techelevator.dao;

import com.techelevator.model.Restaurants;

import java.util.List;

public interface RestaurantsDao {
    List<Restaurants> findAllRestaurants();

    List<Restaurants> findByZipcode(int zipcode);
}
