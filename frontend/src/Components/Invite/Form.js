import React, { Component } from 'react';
	import '../Invite/Invite.css';
	import '../Invite/Form.css'
	import axios from 'axios';
	import { Link } from 'react-router-dom';
import { BEARER_TOKEN } from '../../services/config';
	


	class Form extends Component {
	    constructor(props) {
	        super(props);
	    
	        this.state = {
	            date: '',
	            time: '',
	            term: '',
	            location: '',
	            items: [],
	            value: "",
	            inviteId: '',
	            receiver: '',
	            error: null
	        };
	

	        this.handleTerm = this.handleTerm.bind(this);
	        this.handleLocation = this.handleLocation.bind(this);
	        this.handleReceiver = this.handleReceiver.bind(this);
	        this.handleInviteId = this.handleInviteId.bind(this);
	        this.onSave = this.onSave.bind(this);
	      }
	

	  handleTerm(event) {
	    this.setState({term: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleLocation(event) {
	    this.setState({location: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleReceiver(event) {
	    this.setState({receiver: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleInviteId(event) {
	    this.setState({inviteId: event.target.value});
	    console.log(this.state)
	  }

	   onSave = e => {
	    e.preventDefault();
	    const token = this.props.token
	    let data= "";
	    const inviteInfo = {
	        senderId: this.props.username,
	        event: this.props.date + " " + this.props.time,
	        location: this.state.location + "",
	        food: this.state.term + ""
	    }
	    console.log(inviteInfo)
	    
	    axios.post(`http://localhost:8081/invites/`, inviteInfo, {
	        headers: {
	            'Content-Type': 'application/json',
				'Autorization': 'Bearer' + token
	            //  'Authorization': `Bearer ${BEARER_TOKEN}`,
				//  'Access-Control-Allow-Origin' : '*',
                //  'Access-Control-Allow-Methods': '*',
                //  'Access-Control-Allow-Headers': '*',
	        }})
	        .then(function (response) {
	            console.log(response)
	

	            data = response.data;
	            
	        })
	        .then(() => {
	        const listInfo = {
	            inviteId: data,
	            receiverId: this.state.receiver + "" 
	        }
	        console.log(listInfo)
	        axios.post(`http://localhost:8081/invitations/`, listInfo, {
	            headers: {
	                'Content-Type': 'application/json',
					'Autorization': 'Bearer' + token
	                //  'Authorization': `Bearer ${BEARER_TOKEN}`,
					//  'Access-Control-Allow-Origin' : '*',
                    //  'Access-Control-Allow-Methods': '*',
                    //  'Access-Control-Allow-Headers': '*',
	            }})
	            .then(() => {
	                console.log('entry created');
	            })
	            .catch(err => {
	            console.log(err)
	            })
	            })
	        .catch(err => {
	        console.log(err)
	        })
	    }
	
	    render() {
	        return (
	        
	        <div className='invite-search'>
			<>
	        
				Search to create invite results
	        <input placeholder="food type" onChange={this.handleTerm} className='searchbar-invite'/>
	        <input placeholder="location" onChange={this.handleLocation} className='searchbar-invite'/>
	        <input placeholder="receiver" onChange={this.handleReceiver} className='searchbar-invite'/>
	            <button onClick={this.onSave}className='save'>Save</button>
				</>
	            <div>
	            <Link to='/home'>
	            <button className='return-home'>back to home</button>
	            </Link>
	            </div>
	        </div>
	  
	        );
	    }
	    }
	    export default Form;
	      
