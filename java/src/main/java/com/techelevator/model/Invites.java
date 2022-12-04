package com.techelevator.model;

public class Invites {

    private int id;

    private int toAccountId;
    private int fromAccountId;
    private int inviteStatusId;
    private int inviteTypeId;

    private int inviteId;
    private int senderId;
    private String event;
    private String location;
    private String food;

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public Invites(){};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getToAccountId() {
        return toAccountId;
    }

    public void setToAccountId(int toAccountId) {
        this.toAccountId = toAccountId;
    }

    public int getFromAccountId() {
        return fromAccountId;
    }

    public void setFromAccountId(int fromAccountId) {
        this.fromAccountId = fromAccountId;
    }

    public void setInviteStatusId(int invite_status_id) {
        this.inviteStatusId = inviteStatusId;
    }

    public int getInviteTypeId() {
        return inviteTypeId;
    }

    public void setInviteTypeId(int inviteTypeId) {
        this.inviteTypeId = inviteTypeId;
    }

    public int getInviteStatusId() {
        return inviteStatusId;
    }

    @Override
    public String toString() {
        return "Invite{" +
                "id=" + id +
                ", toAccountId=" + toAccountId +
                ", fromAccountId=" + fromAccountId +
                ", inviteStatusId=" + inviteStatusId +
                ", inviteTypeId=" + inviteTypeId +
                ", invite_id=" + inviteId +
                ", sender_id=" + senderId +
                ", event='" + event + '\'' +
                ", location='" + location + '\'' +
                ", food='" + food + '\'' +
                '}';
    }
}
