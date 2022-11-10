package com.techelevator.dao;

import com.techelevator.model.Invite;
import java.util.List;




public interface InviteDao {
    Invite getInvite(int id);

    List<Invite> listInvite(int id);

    Invite createInvite(Invite invite);

    void updateInvite(Invite invite, int statusID);

    String getInviteStatus(int id);

    String getUserNameFromId(int InviteId, String currentUser);
}
