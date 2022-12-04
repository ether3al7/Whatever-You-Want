package com.techelevator.dao;

import com.techelevator.model.Invites;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;




public interface InviteDao {
    Invites getInvite(int id);

    List<Invites> listInvite(int id);

    List<Invites> getInvitesByUserId(@PathVariable int senderId) throws Exception;

//    Invite createInvite(Invite invite) throws InvalidInviteException;

//    void updateInvite(Invite invite, int statusID);

    String getInviteStatus(int id);

    String getUserNameFromId(int InviteId, String currentUser);


    int createInvite(@RequestBody Invites invites);

    void deleteInvite(@PathVariable int inviteId);

    Invites getByInviteId(@PathVariable int inviteId) throws Exception;

    void updateInvite(@RequestBody Invites invites);
}
