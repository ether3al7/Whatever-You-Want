package com.techelevator.model;

import javax.validation.constraints.NotNull;

public class Account{
    @NotNull(message = "Account ID cannot be null.")
    private int accountID;

    @NotNull(message = "User ID cannot be null.")
    private int userID;

    public int getAccountID(){
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }
}


