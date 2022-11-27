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
	            <>
	        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <img src={require('../../images/calendar.png')} alt="calendar" className="calender" />
	              <h3 className='start-invite'>Starting invitation on {date} at {time}</h3>
	                 <button onClick={changeDate} className='add'>Add an event</button>
	        <Form username={userId} token={token} date={date} time={time} />
	            </MuiPickersUtilsProvider>
	              
	              </>
	          
	        )}
	         </div>
	     </div>
      
	    
	   
	  )
	}


  //   const [selectedDate, handleDateChange] = useState(new Date());
  //   const [selectedTime, handleTimeChange] = useState(new Date());
  //   const [date, setDate] = useState('')
  //   const [time, setTime] = useState('')
  //   const [show, setShow] = useState(false)
  //   const dayjs = require('dayjs')
  //   // const [value, setValue] = React.useState<Date | null>(new Date());
  //   const changeTheme = createTheme({
  //     palette: {
  //       primary: {
  //         main: '#12cdd4',
  //       },
  //     //   secondary: {
  //     //     main: '#f594b7',
  //     //   },
  //     },
  //   });

  //   const token = useSelector((state) => state.token.token);
  //   const user = useSelector((state) => state.user.id);
  //   console.log(user)
  //   console.log(token)


  //   useEffect(() => {
  //     setDate(dayjs(selectedDate).format('MM DD YYYY'));
  //     setTime(dayjs(selectedTime).format('hh:mm a'));
      
  //   },[selectedDate, selectedTime, dayjs]);

  //   function onSubmit(event) {
  //     event.preventDeafault();
  //     date(dayjs(selectedDate).format('MM/DD/YYYY'));
  //     time(dayjs(selectedTime).format('hh:mm a'));
  //     setShow(updated => !updated);
  // }
  //   const handleChange = () => {
  //     setShow(updated => !updated);
  //   }

  //     return (
  //       <>
  //       <div>Hola</div>
        
  //   <div className='invite-container'>
  //       <div className='picker'>
  //           <div className='date-choice'> 
  //           {!show && (
    
  //   <LocalizationProvider 
  //     dateAdapter={AdapterDateFns} className='picker'>
  //   <Stack spacing={3}>
   
  //   <h3 >Please choose the day and time you would like to have your event:</h3>

  //     <DatePicker
  //     //  label="Date"
  //     //  value={selectedDate}
  //     //  onChange={handleDateChange} 
    
  //   renderInput={() => 
  //     <TextField 
  //      label="Date"
  //      value={selectedDate}
  //      onChange={handleDateChange}  />}
        
  //       // renderInput={() => <TextField value={selectedDate} 
  //       // onChange={handleDateChange} />}
  //       />

  //     <TimePickerToolbar 
  //     //  label="Time"
  //     //  value={selectedTime}
  //     //  onChange={handleDateChange} 
    
  //   renderInput={() => 
  //     <TextField 
  //      label="Time"
  //      value={selectedTime}
  //      onChange={handleDateChange}  />}
        
  //       // renderInput={() => <TextField value={selectedTime} 
  //       // onChange={handleTimeChange} />}
        

  //       />

  //     </Stack>
  //     <button onClick={onSubmit}></button>
  //     {/* <InviteList /> */}
  //       <div>
  //         <Link to='/home'>
  //           <button className='home-button'>Home</button>
  //         </Link>
  //       </div>
  //   </LocalizationProvider>
    
  //           )}
  //           {show && (
  //             <div>
  //             <LocalizationProvider dateAdapter={AdapterDateFns} >
  //             <img src={require('../../images/calendar.png')} alt='calender' className='calendar'/>
  //             <h3>Start an Invitaion for {date} at {time}.</h3>
  //             <button onClick={handleChange}></button>
  //             </LocalizationProvider>
  //             {/* <Form username={user} token={token} date={date} time={time}/> */}
  //             </div>
  //           )}

  //           </div>
  //       </div>
  //   </div>
  //   </>
  // )
// }
