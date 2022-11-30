package com.techelevator.dao;

import com.techelevator.model.InvalidInviteException;
import com.techelevator.model.Invite;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;




public interface InviteDao {
    Invite getInvite(int id);

    List<Invite> listInvite(int id);

    List<Invite> getInvitesByUserId(@PathVariable int senderId) throws Exception;

//    Invite createInvite(Invite invite) throws InvalidInviteException;

//    void updateInvite(Invite invite, int statusID);

    String getInviteStatus(int id);

    String getUserNameFromId(int InviteId, String currentUser);


    int createInvite(@RequestBody Invite invite);

    void deleteInvite(@PathVariable int inviteId);

    Invite getByInviteId(@PathVariable int inviteId) throws Exception;

    void updateInvite(@RequestBody Invite invite);
}
