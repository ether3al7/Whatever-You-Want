package com.techelevator.controller;

import com.techelevator.model.Account;
import com.techelevator.dao.AccountDao;
import com.techelevator.model.Invite;
import com.techelevator.dao.InviteDao;
import com.techelevator.model.User;
import com.techelevator.dao.UserDao;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.apache.logging.log4j.message.Message;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RTController {

    private AccountDao accountDao;
    private InviteDao inviteDao;
    private UserDao userDao;

    public RTController(AccountDao accountDao, InviteDao inviteDao, UserDao userDao){
        this.accountDao = accountDao;
        this.inviteDao = inviteDao;
        this.userDao = userDao;
    }

    @RequestMapping(path = "/users/{id}", method = RequestMethod.GET)
    public String getUserName(@PathVariable("id") int fromID){
        List<Account> accountList = accountDao.findAll();
        List<User> userList = userDao.findAll();
        int from = 0;
        for(Account account : accountList){
            if(account.getAccountID() == fromID){
                from = account.getUserID();
            }
        }

        for(User user : userList){
            if (user.getId() == from){
                return user.getUsername();

            }
        }
        return null;
    }

    @RequestMapping(path = "/account/{id}", method = RequestMethod.GET)
    public int getUserIDByAccountID (@PathVariable("id") int accountID){
        return accountDao.getUserId(accountID);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.GET)
    public int getAccountIDByUserID (@PathVariable("id") int userID) {
        return accountDao.getAccountId(userID);
    }


}
