import React, { useEffect, useState } from 'react';
import '../Invite/Invite.css'
import { alpha } from '@material-ui/core/styles'
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useSelector } from 'react-redux';
import InviteList from './InviteList';
import { Link } from 'react-router-dom';
import Form from './Form.js'
import { Stack } from 'react-bootstrap';
import dayjs from 'dayjs';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import InviteData from './InviteData';




export default function Invite() {

  const [selectedDate, setSelectedDate] = useState(new Date())
	  const [selectedTime, setSelectedTime] = useState(new Date())
	  const [date, setDate] = useState('')
	  const [time, setTime] = useState('')
	  const [show, setShow] = useState(false)
	

	  const userId = useSelector((state) => state.user.id);
	  const token = useSelector((state) => state.token.token);
	  console.log(token)
	  console.log(userId)
	

	  useEffect(() => {
	    setDate(dayjs(selectedDate).format('MMMM D YYYY')); 
	    setTime(dayjs(selectedTime).format('h:mm a'));
	  }, [selectedDate, selectedTime]);
	

	  const onSubmit = (e) => {
	    e.preventDefault();
	    setDate(dayjs(selectedDate).format('MMMM D YYYY'));
	    setTime(dayjs(selectedTime).format('h:mm a'));
	    setShow(current => !current);
	  }
	

	  const changeDate = () => {
	    setShow(current => !current);
	  }
	 
	  return (
	
	    <div className='invite-picker'>
	     <div className="pickers">
	      {!show && ( 
	            <MuiPickersUtilsProvider utils={DateFnsUtils}>
	            <img src={require('../../images/calendar.png')} alt="calendar" className="calender" />
              <h3 >Please choose the day and time you would like to have your event:</h3>
	        <DatePicker value={selectedDate} onChange={setSelectedDate} className='DatePicker'/>
          <Stack spacing={3}>
	        <TimePicker value={selectedTime} onChange={setSelectedTime} className='TimePicker'/>
          </Stack>
	              <button onClick={onSubmit} className='confirm'>Confirm Date and Time</button>
	              
	              <InviteList />
	              <InviteData />

	      </MuiPickersUtilsProvider>
	        )}
	  
	          {show && (
	            <div>
				
	        <MuiPickersUtilsProvider utils={DateFnsUtils}>
		
          <img src={require('../../images/calendar.png')} alt="calendar" className="calender" />
	              <h3 className='start-invite'>Starting invitation on {date} at {time}</h3>
	                 <button onClick={changeDate} className='add'>Add an event</button>
					 
	        <Form username={userId} token={token} date={date} time={time}  />
			
	            </MuiPickersUtilsProvider>
	              
	              </div>
	          
	        )}
	         </div>
	     </div>
      
	    
	   
	  )
	}

