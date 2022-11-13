import React from "react"

export default function Restaurants(props) {
    return(
        <div>
            {props.imageUrl && <img src={props.imageUrl}/>}
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <h3>{props.address}</h3>
            <h3>{props.openingTime} - {props.closingTime}</h3>
            {props.phone && <button>Call {props.phone}</button>}
        </div>
    )
}
