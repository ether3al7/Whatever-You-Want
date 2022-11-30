package com.techelevator.dao;

import com.techelevator.model.Location;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcLocationDao implements LocationDao {


    private JdbcTemplate jdbcTemplate;
    private com.techelevator.model.Location Location;


    public JdbcLocationDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public void createLocation(Location Location) {
        boolean created;
        String sql = "INSERT INTO locations (invite_id, location_id) VALUES (?, ?);";
        jdbcTemplate.update(sql, Location.getInviteId(), Location.getLocationId());
    }


    @Override
    public List<Location> getLocationByInviteId(int inviteId) throws Exception {
        List<Location> locations = new ArrayList<>();
        String sql = "SELECT invite_id, location_id FROM locations WHERE invite_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        while (results.next()) {
            Location location = mapRowToLocation(results);
            locations.add(location);
        }
        if (locations.size() == 0) {
            throw new Exception("Invalid invite id : " + inviteId);
        }
        return locations;
    }


    private Location mapRowToLocation(SqlRowSet srs) {
        Location location = new Location();
        Location.setInviteId(srs.getInt("invite_id"));
        Location.setLocationId(srs.getString("location_id"));
        return Location;
    }


}


