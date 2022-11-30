package com.techelevator.model;

public class Invitations {
    private  int inviteId;
    private int receiverId;

    public Invitations(int inviteId, int receiverId) {
        this.inviteId = inviteId;
        this.receiverId = receiverId;
    }

    public Invitations() {

    }

    public int getInviteId() {
        return inviteId;
    }

    public void setInviteId(int inviteId) {
        this.inviteId = inviteId;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(int receiverId) {
        this.receiverId = receiverId;
    }

    @Override
    public String toString() {
        return "Invitations{" +
                "inviteId=" + inviteId +
                ", receiverId=" + receiverId +
                '}';
    }


}
