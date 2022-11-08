package com.techelevator.dao;

import java.util.List;
import com.techelevator.model.Account;


public interface AccountDao {
    public List<Account> findAll();

    public int getUserId(int userID);

    public int getAccountId(int accountID);
}
