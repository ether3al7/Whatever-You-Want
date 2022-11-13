package com.techelevator.model;

public class Invite {

    private int id;

    private int toAccountId;
    private int fromAccountId;
    private int inviteStatusId;
    private int inviteTypeId;


    public Invite(){};

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
}
