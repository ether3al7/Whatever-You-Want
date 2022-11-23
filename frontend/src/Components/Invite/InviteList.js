import React from 'react'
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {Link} from "react-router-dom"


	export default function InviteList() {
	

	    //Renders Invitations sent to you list on Home page -- Your sent invitations list is in SentData.js
	

	    const [inviteList, setInviteList] = React.useState([])
	

	    const userId = useSelector((state) => state.user.id)
	    const token = useSelector((state) => state.token.token)
	

	    useEffect(() => {
	        axios.get('http://localhost:8081/invite_list/invitee/' + userId, {
	            headers: {
	                'Content-Type': 'application/json',
	                'Authorization': 'Bearer ' + token
	            }
	        })
	        .then(response => {
	            setInviteList(response.data)
	        })
	    }, [])
	

	    return ( 
	        <div>
	            <h3>Invites</h3>
	              {inviteList.map((invite) => {
	                    return (
	                    <div id={invite.userId} key={invite.inviteId}>
	                        <Link  to={{
	                            pathname: '/invites/' + invite.inviteId,  //invitations
	                            state: {
	                                inviteId: invite.inviteId,
	                                token: token
	                            },
	                        }}>
	                        <p>Invite from user #{invite.inviteId}</p>
	                        </Link>
	                    </div>
	                    )
	            })} 
	

	        </div>
	     )
	}
	


	   
