package com.techelevator.model;

public class Location {
    private int inviteId;
    private String locationId;

    public Location(){

    }

    public Location(int inviteId, String locationId) {
        this.inviteId = inviteId;
        this.locationId = locationId;
    }

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public String getLocationId() {
        return locationId;
    }

    public void setLocationId(String locationId) {
        this.locationId = locationId;
    }

    @Override
    public String toString() {
        return "Location{" +
                "inviteId=" + inviteId +
                ", locationId='" + locationId + '\'' +
                '}';
    }
}
