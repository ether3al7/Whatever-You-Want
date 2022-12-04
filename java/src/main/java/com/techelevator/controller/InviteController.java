package com.techelevator.controller;

import com.techelevator.dao.InviteDao;
import com.techelevator.model.Invites;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


    @CrossOrigin
    @RestController
    @RequestMapping(path = "/invites")
    @PreAuthorize("isAuthenticated()")
    public class InviteController {

        @Autowired
        private InviteDao inviteDao;

        @GetMapping(path = "/sender/{sender_id}")
        public List<Invites> getBySenderId(@PathVariable Integer sender_id) throws Exception {
            List<Invites> invites = new ArrayList<>();
            invites = inviteDao.getInvitesByUserId(sender_id);
            return invites;
        }


        @PostMapping(path = "")
        public int createInvite(@RequestBody Invites invites) {
            int invite_id = inviteDao.createInvite(invites);
            return invite_id;
        }


        @PutMapping(path = "")
        public void updateInvite(@RequestBody Invites invites) {
            inviteDao.updateInvite(invites);
        }


        @DeleteMapping(path = "/{inviteId}")
        public void deleteInvite(@PathVariable int inviteId) {
            inviteDao.deleteInvite(inviteId);
        }


        @GetMapping(path = "/{invite_id}")
        public Invites getInviteById(@PathVariable Integer invite_id) throws Exception {
            return inviteDao.getByInviteId(invite_id);
        }


    }
