package com.techelevator.dao;

import com.techelevator.model.Location;

import java.util.List;

public interface LocationDao {

    void createLocation(Location Location);
    List<Location> getLocationByInviteId(int inviteId) throws Exception;
}

