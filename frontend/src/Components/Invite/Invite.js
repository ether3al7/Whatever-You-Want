import React, { useEffect, useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useSelector } from 'react-redux';
import InviteList from './InviteList';
import { Link } from 'react-router-dom';
import Form from './Form.js'
import { createTheme } from '@mui/material/styles';
import { Stack } from 'react-bootstrap';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from '@mui/system';
import dayjs from 'dayjs';



export default function Invite() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTimeChange] = useState(new Date());
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [show, setShow] = useState(false)
    const dayjs = require('dayjs')
    // const [value, setValue] = React.useState<Date | null>(new Date());
    const changeTheme = createTheme({
      palette: {
        primary: {
          main: '#12cdd4',
        },
      //   secondary: {
      //     main: '#f594b7',
      //   },
      },
    });

    const token = useSelector((state) => state.token.token);
    const user = useSelector((state) => state.user.id);
    console.log(user)
    console.log(token)


    useEffect(() => {
      date(dayjs(selectedDate).format('MM/DD/YYYY'));
      time(dayjs(selectedTime).format('hh:mm a'));
      
    },[selectedDate, selectedTime, dayjs]);

    function onSubmit(event) {
      event.preventDeafault();
      date(dayjs(selectedDate).format('MM/DD/YYYY'));
      time(dayjs(selectedTime).format('hh:mm a'));
      setShow(updated => !updated);
  }
    const handleChange = () => {
      setShow(updated => !updated);
    }

      return (
        <>
        <div>Hola</div>
    <div className='invite-container'>
        <div className='picker'>
            <div className='date-choice'> 
            {!show && (
    
    <LocalizationProvider 
      dateAdapter={AdapterDateFns} className='picker'>
    <Stack spacing={3}>
   
    <h3 >Please choose the day and time you would like to have your event:</h3>

      <DatePicker 
        renderInput={(params) => <TextField label='date' 
        value={selectedDate} 
        onChange={handleDateChange}  />}
        />

      <TimePicker 
        renderInput={(props) => <TextField label='Date'
        value={selectedTime} 
        onChange={handleTimeChange} />}
        

        />

      </Stack>
      <button onClick={onSubmit}></button>
      {/* <InviteList /> */}
        <div>
          <Link to='/home'>
            <button className='home-button'>Home</button>
          </Link>
        </div>
    </LocalizationProvider>
    
            )}
            {show && (
              <div>
              <LocalizationProvider dateAdapter={AdapterDateFns} >
              <img src={require('../../images/calendar.png')} alt='calender' className='calendar'/>
              <h3>Start an Invitaion for {date} at {time}.</h3>
              <button onClick={handleChange}></button>
              </LocalizationProvider>
              {/* <Form username={user} token={token} date={date} time={time}/> */}
              </div>
            )}

            </div>
        </div>
    </div>
    </>
  )
}
