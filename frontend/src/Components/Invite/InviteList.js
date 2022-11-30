import React from 'react'
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {Link} from "react-router-dom"
import { BEARER_TOKEN } from '../../services/config'

//List of recevied invitations

	export default function InviteList() {
	

	    const [inviteList, setInviteList] = React.useState([])
	

	    const userId = useSelector((state) => state.user.id)
	    const token = useSelector((state) => state.token.token)
		console.log(token)
	

	    useEffect(() => {
	        axios.get('/invitations/invitee/' + userId, {
	            headers: {
	                'Content-Type': 'application/json',
					'Autorization': 'Bearer ' + token,
					'Access-Control-Allow-Credentials' : true,
	                // 'Authorization': `Bearer ${BEARER_TOKEN}`,
					//  mode: 'cors',
                    //  credentials: 'include',
                    // 'Access-Control-Allow-Origin' : '*',
                    // 'Access-Control-Allow-Methods': '*', 
                    // 'Access-Control-Allow-Headers': '*',
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
	                            pathname: '/invitations/' + invite.inviteId,  //invitations data from inviteData.js
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

	


	   
