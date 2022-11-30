import React from 'react'
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {Link} from "react-router-dom"
import { BEARER_TOKEN } from '../../services/config'

//List of Sent invitations
	export default function Sent() {
	

	    const [inviteList, setInviteList] = React.useState([])
	

	    const userId = useSelector((state) => state.user.id)
	    const token = useSelector((state) => state.token.token)
	

	    useEffect(() => {
	        axios.get('http://localhost:8081/invites/sender/' + userId, {
	            headers: {
	                'Content-Type': 'application/json',
					'Autorization': 'Bearer ' + token
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
	            {/* <h3>Invites</h3> */}
	              {inviteList.map((invite) => {
	                    return (
	                    <div id={invite.userId} key={invite.inviteId}>
	                        <Link  to={{
	                            pathname: '/invitations/' + invite.inviteId,  
	                            state: {
	                                inviteId: invite.inviteId,
	                                token: token
	                            },
	                        }}>
	                        <p>Invite for #{invite.event} to user #{invite.inviteId}</p>
	                        </Link>
	                    </div>
	                    )
	            })} 
	

	        </div>
	     )
	}
	
	


	   
