import React, { useState } from 'react'
import axios from 'axios';
import { BEARER_TOKEN } from '../../services/config'
import Final from './Final'

export default function ListFinalist(props) {
    const [rejected, setRejected] = useState([]);
    const [restaurantList, setRestaurantList] = useState({restaurants:[]});
    const token = props.token;
    const inviteId = props.inviteId;
    const location = props.location;
    const food = props.food;


    const btn = () => {
	    
	    //pulls ID's of restaurants that have been voted no
	    axios.get('http://localhost:8081/location/invite_id/' + inviteId, {
	        headers: {
	            'Authorization': 'Bearer ' + token,
				 mode: 'cors',
                 credentials: 'include',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': '*', 
                'Access-Control-Allow-Headers': '*',
	        },
	    })
	    .then(response => {
	    //logs ID's of restaurants that have been voted no
	        console.log(response.data)
	        // const x = response.data
	        setRejected(response.data)
	    })
	    //calls yelp api with food and location 
	    axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${food}&location=${location}`, { 
	        headers: {
	        'Authorization': `Bearer ${BEARER_TOKEN}`,
	         mode: 'cors',
             credentials: 'include',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': '*', 
            'Access-Control-Allow-Headers': '*',
	        }
	    })
	    //logs list of all invite restaurants - need to filter out restaurants that have been voted no
	    .then(response => {
	        console.log(response.data)
	        setRestaurantList(response.data)
	    })
	        

	    }
	
	

  return (
    <div>
        <button onClick={btn}><h1>Finalist!</h1></button>
        <Final inviteId={inviteId} token={token} restaurants={restaurantList.businesses}/>
    </div>
  )
}
