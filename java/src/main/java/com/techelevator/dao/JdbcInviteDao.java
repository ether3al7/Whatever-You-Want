package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.PreparedStatement;
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
                "FROM invites " +
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

//    @Override
//    public Invite createInvite(Invite invite) throws InvalidInviteException {
//        if (invite.getFromAccountId() == invite.getToAccountId()){
//            throw new InvalidInviteException();
//        }
//        if(invite.getInviteTypeId() == 1){
//            String sql = "INSERT INTO invite(account_from, account_to, invite_status_id, invite_type_id) " +
//                    "VALUES (?,?,?,?) RETURNING invite_id;";
//
//            Integer inviteId = jdbcTemplate.queryForObject(sql, Integer.class, invite.getInviteTypeId(),
//                    invite.getInviteStatusId(), invite.getFromAccountId(), invite.getToAccountId());
//
//            if(invite.getInviteStatusId() == 2){
//                updateFromAccount(invite.getId(), invite.getToAccountId());
//                updateToAccount(invite.getId(), invite.getFromAccountId());
//            }
//            return getInvite(inviteId);
//        }
//
//        return invite;
//    }

    private void updateToAccount(int id, int fromAccountId) {
    }

    private void updateFromAccount(int id, int toAccountId) {
    }

//    @Override
//    public void updateInvite(Invite invite, int statusID) throws InvalidInviteException {
//        if (invite.getFromAccountId() == invite.getFromAccountId()){
//            throw new InvalidInviteException();
//        }
//
//        if(statusID == 2){
//            invite.setInviteStatusId(2);
//            invite.setInviteTypeId(2);
//
//            String sql = "UPDATE invite SET invite_type_id = ?, invite_status_id = ? " +
//                    "WHERE invite_id = ?";
//
//            jdbcTemplate.update(sql, invite.getInviteTypeId(),invite.getInviteStatusId(), invite.getId());
//
//            updateFromAccount(invite.getId(),invite.getToAccountId());
//            updateToAccount(invite.getId(), invite.getFromAccountId());
//        }
//
//        else if (statusID == 3) {
//            invite.setInviteStatusId(3);
//
//            String sql = " UPDATE invite SET invite_status_id = ? " +
//                    "WHERE invite_id = ?;";
//
//
//            jdbcTemplate.update(sql, invite.getInviteStatusId(), invite.getId());
//        }
//    }

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

    @Override
    public List<Invite> getInvitesByUserId(@PathVariable int senderId) throws Exception {
        List<Invite> invites = new ArrayList<>();
        String sql = "SELECT * FROM invites WHERE sender_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, senderId);
        while (results.next()) {
            Invite invite = mapRowToInvite(results);
            invites.add(invite);
        }
        if (invites.size() == 0) {
            throw new Exception("Invalid user id : " + senderId);
        }
        return invites;
    }
    @Override
    public int createInvite(@RequestBody Invite invite) {
        boolean inviteCreated = false;
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "invite_id";


        String createNewInvite = "INSERT INTO invites (sender_id, event, location, food)  VALUES (?,?,?,?) RETURNING invite_id;";


        inviteCreated = jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(createNewInvite, new String[] { id_column });
            statement.setInt(1, invite.getSenderId());
            statement.setString(2, invite.getEvent());
            statement.setString(3, invite.getLocation());
            statement.setString(4, invite.getFood ());
            return statement;
        }, keyHolder) == 1;


        int newInviteId = (int) keyHolder.getKeys().get(id_column);


        System.out.println(inviteCreated);
        return newInviteId;
    }
    @Override
    public void deleteInvite(@PathVariable int inviteId) {
        String sql = "DELETE FROM invites WHERE invite_id = ?";
        jdbcTemplate.update(sql, inviteId);
        System.out.println("Invite has been Deleted");
    }

    @Override
    public Invite getByInviteId(@PathVariable int invite_id) throws Exception {
        String sql = "SELECT * FROM invites WHERE invite_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, invite_id);
        if (results.next()) {
            return mapRowToInvite(results);
        } else {
            throw new Exception("inviteId " + invite_id + " has not been found.");
        }
    }
    @Override
    public void updateInvite(@RequestBody Invite invite) {
        String sql = "update invites Set (sender_id, event, location, food)  VALUES (?,?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite.getSenderId(), invite.getEvent(), invite.getInviteId());
    }


    private Invite mapRowToInvite(SqlRowSet srs) {
        Invite invite = new Invite();
        invite.setId(srs.getInt("invite_id"));
        invite.setToAccountId(srs.getInt("account_to"));
        invite.setFromAccountId(srs.getInt("account_from"));
        invite.setInviteStatusId(srs.getInt("invite_status_id"));
        invite.setInviteId(srs.getInt("inviteId"));
        invite.setInviteId(srs.getInt("invite_id"));
        invite.setSenderId(srs.getInt("sender_id"));
        invite.setEvent(srs.getString("event"));
        invite.setLocation(srs.getString("location"));
        invite.setFood(srs.getString("food"));

        return invite;
    }

}
