package com.techelevator.dao;

import com.techelevator.model.InvalidInviteException;
import com.techelevator.model.Invite;
import org.springframework.data.relational.core.sql.In;
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
    public Invite createInvite(Invite invite) throws InvalidInviteException {
        if (invite.getFromAccountId() == invite.getToAccountId()){
            throw new InvalidInviteException();
        }
        if(invite.getInviteTypeId() == 1){
            String sql = "INSERT INTO invite(account_from, account_to, invite_status_id, invite_type_id) " +
                    "VALUES (?,?,?,?) RETURNING invite_id;";

            Integer inviteId = jdbcTemplate.queryForObject(sql, Integer.class, invite.getInviteTypeId(),
                    invite.getInviteStatusId(), invite.getFromAccountId(), invite.getToAccountId());

            if(invite.getInviteStatusId() == 2){
                updateFromAccount(invite.getId(), invite.getToAccountId());
                updateToAccount(invite.getId(), invite.getFromAccountId());
            }
            return getInvite(inviteId);
        }

        return invite;
    }

    private void updateToAccount(int id, int fromAccountId) {
    }

    private void updateFromAccount(int id, int toAccountId) {
    }

    @Override
    public void updateInvite(Invite invite, int statusID) throws InvalidInviteException {
        if (invite.getFromAccountId() == invite.getFromAccountId()){
            throw new InvalidInviteException();
        }

        if(statusID == 2){
            invite.setInviteStatusId(2);
            invite.setInviteTypeId(2);

            String sql = "UPDATE invite SET invite_type_id = ?, invite_status_id = ? " +
                    "WHERE invite_id = ?";

            jdbcTemplate.update(sql, invite.getInviteTypeId(),invite.getInviteStatusId(), invite.getId());

            updateFromAccount(invite.getId(),invite.getToAccountId());
            updateToAccount(invite.getId(), invite.getFromAccountId());
        }

        else if (statusID == 3) {
            invite.setInviteStatusId(3);

            String sql = " UPDATE invite SET invite_status_id = ? " +
                    "WHERE invite_id = ?;";


            jdbcTemplate.update(sql, invite.getInviteStatusId(), invite.getId());
        }
    }

    @Override
    public String getInviteStatus(int statusID) {
        String sql = "SELECT invite_status_desc "+
                "FROM invite_status "+
                "WHERE invite_status_id = ?;";
        return jdbcTemplate.queryForObject(sql, String.class, statusID);
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
