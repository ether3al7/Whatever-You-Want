package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcInviteDao implements InviteDao{

    private JdbcTemplate jdbcTemplate;

    private JdbcInviteDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }


    public Invite getInvite(int inviteId){
        Invite invite = null;

        String sql = "SELECT * " +
                "FROM invite " +
                "WHERE invite_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        if(results.next()){
            invite = mapRowToInvite(results);
        }
        return invite;
    }

    @Override
    public List<Invite> listInvite(int userId) {
        List<Invite> invites = new ArrayList<>();

        String sql = "SELECT * FROM invite " +
                "JOIN account ON invite.account_from = account.account_id " +
                "WHERE account_to = (SELECT account_id FROM account WHERE user_id = ?) " +
                "OR account_from = (SELECT account_id FROM account WHERE user_id = ?);";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql,userId, userId);
        while(results.next()){
            invites.add(mapRowToInvite(results));
        }
        return invites;
    }

    @Override
    public Invite createInvite(Invite invite) {
        return null;
    }

    @Override
    public void updateInvite(Invite invite, int statusID) {
    }

    @Override
    public String getInviteStatus(int id) {
        return null;
    }

    @Override
    public String getUserNameFromId(int InviteId, String currentUser) {
        return null;
    }

    private Invite mapRowToInvite(SqlRowSet srs) {
        Invite invite = new Invite();
        invite.setId(srs.getInt("invite_id"));
        invite.setToAccountId(srs.getInt("account_to"));
        invite.setFromAccountId(srs.getInt("account_from"));
        invite.setInviteStatusId(srs.getInt("invite_status_id"));
        return invite;
    }

}
