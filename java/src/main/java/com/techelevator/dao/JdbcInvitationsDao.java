package com.techelevator.dao;

import com.techelevator.model.Invitations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

    @Component
    public class JdbcInvitationsDao implements InvitationsDao{


        private JdbcTemplate jdbcTemplate;


        public JdbcInvitationsDao(JdbcTemplate jdbcTemplate) {
            this.jdbcTemplate = jdbcTemplate;
        }



        @Override
        public void createInvitations(@RequestBody Invitations invitations){
            String sql = "INSERT INTO invitations (invite_id, receiver_id)  VALUES (?,?);";
            jdbcTemplate.update(con -> {
                PreparedStatement statement = con.prepareStatement(sql, new int[]{});
                statement.setInt(1, invitations.getInviteId());
                statement.setInt(2, invitations.getReceiverId());
                return statement;
            });


        }

       @Override
        public void deleteByInviteId(@PathVariable int invite_id) {
            String sql = "DELETE FROM invitations WHERE invite_id = ?";
            jdbcTemplate.update(sql, invite_id);
            System.out.println("Invite has beenDeleted");
        }


        @Override
        public List<Invitations> getInvitesByReceiverId(@PathVariable int receiver_id) throws Exception {


            List<Invitations> invites = new ArrayList<>();
            String sql = "SELECT invite_id, receiver_id FROM invitations WHERE receiver_id = ? ;";
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, receiver_id);
            while (results.next()) {
                Invitations invitations = mapRowToInvitations(results);
                invites.add(invitations);
            }
            if (invites.size() == 0) {
                throw new Exception("Invalid user id : " + receiver_id);
            }
            return invites;
        }




        @Override
        public List<Invitations> getReceiversByInviteId(@PathVariable int invite_id) throws Exception {
            List<Invitations> invites = new ArrayList<>();
            String sql = "SELECT invite_id, receiver_id FROM invitations WHERE invite_id = ? ;";
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, invite_id);
            while (results.next()) {
                Invitations invitations = mapRowToInvitations(results);
                invites.add(invitations);
            }
            if (invites.size() == 0) {
                throw new Exception("Invalid user id : " + invite_id);
            }
            return invites;
        }


        private Invitations mapRowToInvitations(SqlRowSet srs) {
            Invitations invitations = new Invitations();
            invitations.setInviteId(srs.getInt("invite_id"));
            invitations.setReceiverId(srs.getInt("receiver_id"));
            return invitations;
        }




    }

