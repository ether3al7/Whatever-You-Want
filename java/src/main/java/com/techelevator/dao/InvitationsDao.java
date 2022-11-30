package com.techelevator.dao;

import com.techelevator.model.Invitations;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface InvitationsDao {

    List<Invitations> getInvitesByReceiverId(int receiver_id) throws Exception;

    List<Invitations> getReceiversByInviteId(int invite_id) throws Exception;


    void createInvitations(Invitations invitations);

    void deleteByInviteId(int invite_id);

}
