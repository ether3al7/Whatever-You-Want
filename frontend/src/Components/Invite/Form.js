import React, { Component } from 'react';
	import '../Invite/Invite.css';
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
	

	        this.handleTermChange = this.handleTermChange.bind(this);
	        this.handleLocationChange = this.handleLocationChange.bind(this);
	        this.handleReceiverChange = this.handleReceiverChange.bind(this);
	        this.handleInviteIdChange = this.handleInviteIdChange.bind(this);
	        this.onSave = this.onSave.bind(this);
	      }
	

	  handleTermChange(event) {
	    this.setState({term: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleLocationChange(event) {
	    this.setState({location: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleReceiverChange(event) {
	    this.setState({receiver: event.target.value});
	    // console.log(this.state)
	  }
	

	  handleInviteIdChange(event) {
	    this.setState({inviteId: event.target.value});
	    console.log(this.state)
	  }

	   onSave = e => {
	    e.preventDefault();
	    // const token = this.props.token
	    let data= "";
	    const inviteInfo = {
	        senderId: this.props.username,
	        appointment: this.props.date + " " + this.props.time,
	        location: this.state.location + "",
	        food: this.state.term + ""
	    }
	    console.log(inviteInfo)
	    
	    axios.post(`http://localhost:8081/invites/`, inviteInfo, {
	        headers: {
	            'Content-Type': 'application/json',
	             'Authorization': 'Bearer ' + BEARER_TOKEN
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
	                 'Authorization': 'Bearer ' + BEARER_TOKEN
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
	        <div>
	        <div className='enter-location'>
	                    <h3 className='search'>Seacrh to create invite results</h3>
	                    <br/>
	        <input placeholder="food type" onChange={this.handleTermChange} className='searchbar-b'/>
	        <input placeholder="location" onChange={this.handleLocationChange} className='searchbar-b'/>
	        <input placeholder="receiver" onChange={this.handleReceiverChange} className='searchbar-b'/>

	        </div>
	            <button onClick={this.onSave}className='save'>Save</button>
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
	      
