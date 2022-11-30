package com.techelevator.dao;

import com.techelevator.model.Restaurants;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcRestaurantsDao implements RestaurantsDao {
    private JdbcTemplate jdbcTemplate;

    public JdbcRestaurantsDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Restaurants> findAllRestaurants(){
        List<Restaurants> restaurant = new ArrayList<>();
        String sql = "SELECT location_id, name, address, city, zipcode, phone, opening_time, closing_time, food, image FROM restaurants;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Restaurants restaurants = mapRowToRestaurants(results);
            restaurant.add(restaurants);
        }
        return restaurant;
    }

    @Override
    public List<Restaurants> findByZipcode(int zipcode) {
        List<Restaurants> restaurant = new ArrayList<>();
        String sql = "SELECT location_id, name, address, city, zipcode, phone, opening_time, closing_time, food, image FROM restaurants " +
                "WHERE zipcode = ?;";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, zipcode);
        while(results.next()) {
            Restaurants restaurants = mapRowToRestaurants(results);
            restaurant.add(restaurants);
        }
        return restaurant;
    }

    private Restaurants mapRowToRestaurants(SqlRowSet results) {
        Restaurants restaurants = new Restaurants();
        restaurants.setLocation_id(results.getInt("location_id"));
        restaurants.setName(results.getString("name"));
        restaurants.setAddress(results.getString("address"));
        restaurants.setCity(results.getString("city"));
        restaurants.setZipcode(results.getInt("zipcode"));
        restaurants.setPhone(results.getString("phone"));
        restaurants.setOpening_time(results.getInt("opening_time"));
        restaurants.setClosing_time(results.getInt("closing_time"));
        restaurants.setFood(results.getString("food"));
        restaurants.setImage(results.getString("image"));

        return restaurants;
    }


}
