package com.techelevator.controller;

import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @CrossOrigin
    @RestController
    @RequestMapping(path = "/invites")
    @PreAuthorize("isAuthenticated()")
    public class InviteController {

        @Autowired
        private InviteDao inviteDao;

        @GetMapping(path = "/sender/{sender_id}")
        public List<Invite> getBySenderId(@PathVariable Integer sender_id) throws Exception {
            List<Invite> invites = null;
            invites = inviteDao.getInvitesByUserId(sender_id);
            return invites;
        }


        @PostMapping(path = "")
        public int createInvite(@RequestBody Invite invite) {
            int invite_id = inviteDao.createInvite(invite);
            return invite_id;
        }


        @PutMapping(path = "")
        public void updateInvite(@RequestBody Invite invite) {
            inviteDao.updateInvite(invite);
        }


        @DeleteMapping(path = "/{inviteId}")
        public void deleteInvite(@PathVariable int inviteId) {
            inviteDao.deleteInvite(inviteId);
        }


        @GetMapping(path = "/{invite_id}")
        public Invite getInviteById(@PathVariable Integer invite_id) throws Exception {
            return inviteDao.getByInviteId(invite_id);
        }


    }
