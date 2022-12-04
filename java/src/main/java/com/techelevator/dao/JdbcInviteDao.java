package com.techelevator.dao;

import com.techelevator.model.Invites;
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


    public Invites getInvite(int inviteId){
        Invites invites = null;

        String sql = "SELECT * " +
                "FROM invites " +
                "WHERE invite_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        if(results.next()){
            invites = mapRowToInvite(results);
        }
        return invites;
    }

    @Override
    public List<Invites> listInvite(int userId) {
        List<Invites> invites = new ArrayList<>();

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
    public List<Invites> getInvitesByUserId(@PathVariable int sender_Id) throws Exception {
        List<Invites> invites = new ArrayList<>();
        String sql = "SELECT sender_id, invite_id, event, location, food FROM invites " + "WHERE sender_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, sender_Id);
        while (results.next()) {
            Invites invite = mapRowToInvite(results);
            invites.add(invite);
        }
        if (invites.size() == 0) {
            throw new Exception("Invalid user id : " + sender_Id);
        }
        return invites;
    }
    @Override
    public int createInvite(@RequestBody Invites invites) {
        boolean inviteCreated = false;
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "invite_id";


        String createNewInvite = "INSERT INTO invites (sender_id, event, location, food)  VALUES (?,?,?,?) RETURNING invite_id;";


        inviteCreated = jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(createNewInvite, new String[] { id_column });
            statement.setInt(1, invites.getSenderId());
            statement.setString(2, invites.getEvent());
            statement.setString(3, invites.getLocation());
            statement.setString(4, invites.getFood());
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
    public Invites getByInviteId(@PathVariable int invite_id) throws Exception {
        String sql = "SELECT invite_id, sender_id, event, location, food FROM invites WHERE invite_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, invite_id);
        if (results.next()) {
            return mapRowToInvite(results);
        } else {
            throw new Exception("inviteId " + invite_id + " has not been found.");
        }
    }
    @Override
    public void updateInvite(@RequestBody Invites invites) {
        String sql = "UPDATE invites SET (sender_id, event, location, food)  VALUES (?,?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql, invites.getSenderId(), invites.getEvent(), invites.getInviteId());
    }


    private Invites mapRowToInvite(SqlRowSet srs) {
        Invites invites = new Invites();
        invites.setId(srs.getInt("invite_id"));
        invites.setToAccountId(srs.getInt("account_to"));
        invites.setFromAccountId(srs.getInt("account_from"));
        invites.setInviteStatusId(srs.getInt("invite_status_id"));
//        invites.setInviteId(srs.getInt("inviteId"));
        invites.setInviteId(srs.getInt("invite_id"));
        invites.setSenderId(srs.getInt("sender_id"));
        invites.setEvent(srs.getString("event"));
        invites.setLocation(srs.getString("location"));
        invites.setFood(srs.getString("food"));

        return invites;
    }

}
