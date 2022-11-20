package com.techelevator.dao;
import com.techelevator.model.Account;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class JdbcAccountDao implements AccountDao{
    private JdbcTemplate jdbcTemplate;

    public JdbcAccountDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Account> findAll(){
        List<Account> accounts = new ArrayList<>();
        String sql = "SELECT * FROM account;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()){
            Account account = mapRowToAccount(results);
            accounts.add(account);
        }
        return accounts;
    }


    public int getAccountId(int userID) {
        int accountID = 0 ;
        String sql = "SELECT account_id FROM account " +
                "WHERE user_id = ?;";

        accountID = jdbcTemplate.queryForObject(sql, Integer.class, userID);
        return accountID;

    }



    public int getUserId(int fromAccountID) {
        int userID = 0;
        String sql = "SELECT user_id FROM account " +
                "WHERE account_id = ?;";

        userID = jdbcTemplate.queryForObject(sql, Integer.class, fromAccountID );
        return userID;
    }



    private Account mapRowToAccount(SqlRowSet result){
        Account account = new Account();
        account.setAccountID(result.getInt("account_id"));
        account.setUserID(result.getInt("user_id"));
        return account;
    }
}
