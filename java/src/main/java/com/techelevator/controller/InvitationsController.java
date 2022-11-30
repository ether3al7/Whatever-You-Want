package com.techelevator.controller;


import com.techelevator.dao.InvitationsDao;
import com.techelevator.model.Invitations;
import com.techelevator.model.Invite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
    @RestController
    @RequestMapping(path = "/invitations")
    @PreAuthorize("isAuthenticated()")
    public class InvitationsController {




        @Autowired
        private InvitationsDao invitationsDao;

    @GetMapping (path = "invitee/receiver_id")
    public List<Invitations> getByReceiverId(int receiver_id) throws Exception {
        List<Invite> invitations = null;
        return invitationsDao.getInvitesByReceiverId(receiver_id);

    }


    @GetMapping(path = "invite/invite_id")
    public List<Invitations> getByInviteId(@PathVariable int invite_id) throws Exception {
        List<Invitations> invitations = null;
        invitations = invitationsDao.getReceiversByInviteId(invite_id);
        return invitations;
    }


    @PostMapping(path = "")
    public void createInvitations(@RequestBody Invitations invitations){
        invitationsDao.createInvitations(invitations);
    }

    @DeleteMapping(path = "invitee/{invite_id}")
    public void deleteByInviteId(@PathVariable int invite_id) {
        invitationsDao.deleteByInviteId(invite_id);
    }
    public List<Invitations> getInviteById(@PathVariable int receiver_id) throws Exception {
        List<Invitations> invites = null;
        return invitationsDao.getInvitesByReceiverId(receiver_id);
    }






}



