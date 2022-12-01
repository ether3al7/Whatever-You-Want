import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BEARER_TOKEN } from '../../services/config'
import Finalist from '../Finalists/Finalist'
import { useInRouterContext, useLocation, useNavigate } from 'react-router'
import RestaurantList from './RestaurantList'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function InviteData(props) {
    
const [inviteData, setInviteData] = useState({})
const [restaurantList, setRestaurantList] = useState({restaurants: []})
// const location = useSelector();
// const location = useLocation();

// const inviteId = location.state.inviteId
// const token = location.state.token
const inviteId = useSelector((state) => state.token.inviteId)
const token = useSelector((state) => state.token.token)



// useEffect(() => {
    const list = () => {
axios.get('http://localhost:8081/invites/' + inviteId, {
    headers: {
        'Content-Type': 'application/json',
        'Autorization': 'Bearer ' + token,
        'Access-Control-Allow-Credentials' : 'true',
        // 'Authorization': `Bearer ${BEARER_TOKEN}`,
        //  mode: 'cors',
        //  credentials: 'include',
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods': '*', 
        // 'Access-Control-Allow-Headers': '*',
    }
})
.then(response => {
    setInviteData(response.data)
    })
}
// }, []


// const list = () => {
//     axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${inviteData.food}&location=${inviteData.location}`, { 
//         headers: {
//             'Autorization': 'Bearer ' + token,
//             // 'Authorization': `Bearer ${BEARER_TOKEN}`,
//             //  mode: 'cors',
//             //  credentials: 'include',
//             'Access-Control-Allow-Origin' : '*',
//             // 'Access-Control-Allow-Methods': '*',
//             // 'Access-Control-Allow-Headers': '*',
//             }
//             })
//             .then(response => {
//                 console.log(response.data)
//                 setRestaurantList(response.data)
//             })
//         }


    // const [invitationList, setInvitationList] = React.useState([])
	

    // const userId = useSelector((state) => state.user.id)
    // const username = useSelector((state) => state.user.username)
    // const token = useSelector((state) => state.token.token)


    // useEffect(() => {
    //     axios.get('http://localhost:8081/invites/sender/' + userId, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     .then(response => {
    //         setInvitationList(response.data)
    //     })
    // }, [])


    return ( 

        <div>
           <div>
           Invitation Details:
           <p>Invite ID: {inviteData.inviteId} - Sender ID: {inviteData.senderId} Event: {inviteData.event}</p>
           <p>Food Type: {inviteData.food} - Location: {inviteData.location} </p>
           </div>
           <button onClick={list} className='list'>Confirm and Submit Restaurant details for your upcoming Event</button>
           <RestaurantList inviteId={inviteId} token={token} restaurants={restaurantList.businesses}/>

           <div>
            <Finalist token={token} inviteId={inviteId} food={inviteData.food} location={inviteData.location}/>
           </div>
        </div>
        // <div className="sent1">
        //     {/* <h1>Sent</h1> */}
        //       {list.map((invite) => {
        //             return (
        //             <div id={invite.userId} key={invite.inviteId}>
        //                 <Link  to={{
        //                     pathname: '/invites/' + invite.inviteId,
        //                     state: {
        //                         inviteId: invite.inviteId,
        //                         token: token
        //                     },
        //                 }}>
        //                 <p>Invite for {invite.event} to user #{invite.inviteId}</p>
        //                 </Link>
                     


        //             </div>
        //             )
        //     })} 


        // </div>


     
     )
}
export default InviteData;
