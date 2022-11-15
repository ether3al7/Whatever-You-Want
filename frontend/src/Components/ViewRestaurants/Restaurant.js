import React from "react"

export default function Restaurants(props) {
    let isOpen

    const date = new Date()
    const hours = date.getHours() 
    const minutes = date.getMinutes()
    const time = date.getTime()
    const seconds = date.getSeconds()
    const callNumber = "tel:" + props.phone


    if (hours >= props.openingTime && hours < props.closingTime){
        isOpen = true;
    } else {
        isOpen = false;
    }

    let closingTwelveHour

    if (props.closingTime > 12){
        closingTwelveHour = props.closingTime - 12;
    } else {
        closingTwelveHour = props.closingTime;
    }
    console.log("Time " + time + "Other " + hours + minutes + "sec" + seconds)
    
    return(
        <div className="restaurant">
            <section className="img-section">
                {props.imageUrl && <img className="img" src={props.imageUrl}/>}
            </section>
            <section className="info">
                <h2>{props.name}</h2>
                <h3>Type: {props.type}</h3>
                <h3>Location: {props.address}</h3>
                <h3>Hours: {props.openingTime}:00am - {closingTwelveHour}:00pm</h3>
                <h3 className="sign">{isOpen ? 'Open Now' : 'Closed'}</h3>  
            </section>
            <section className="call-btn">
            {props.phone && <a href={callNumber}><img className="call-img" src={require("././images/call.png")}/></a>}
            </section>

        </div>
    )
}
