package com.techelevator.controller;

import com.techelevator.dao.LocationDao;
import com.techelevator.model.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @CrossOrigin
    @RestController
    @RequestMapping(value = "/location")
    @PreAuthorize("isAuthenticated()")
    public class LocationController {


        @Autowired
        private LocationDao LocationDao;


        @PostMapping(value = "")
        public void createLocation(@RequestBody Location Location) {
            LocationDao.createLocation(Location);
        }


        @GetMapping(value = "/invite_id/{inviteId}")
        public List<Location> getInvitesByInviteId(@PathVariable int inviteId) throws Exception {
            List<Location> locations = null;
            locations = LocationDao.getLocationByInviteId(inviteId);
            return locations;

        }
    }
