import React, { useState } from 'react'
import ListFinalist from './ListFinalist';

export default function Finalist(props) {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(current => !current)
  }
  return (
    <div>
      <button onClick={toggleShow}>Restaurant Finalist</button>
      {show && <ListFinalist token={props.token} inviteId={props.inviteId} food={props.food} location={props.location}/>}
    </div>
  )
}
