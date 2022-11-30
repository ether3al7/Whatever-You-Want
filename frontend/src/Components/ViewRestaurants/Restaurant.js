import React from "react"

export default function Restaurants(props) {

    
//  const b = props.business;
//  if (!b) {
//      return (<div/>);
//  }

//  const tags = b.categories.map(category => (<span className={`tag ${['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
//  const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

//  const callNumber = "tel:" + b.phone

//  return (
//      <div className='restaurant'>
//          <img src={b.image_url} alt='business' className='img'/>
//          {/* <img src={require("././images/call.png")} alt='business' className='img'/> */}
//          <div className='info'>
//              <h2 className="subtitle">{b.name}</h2>
//              {/* <BusinessRating reviewCount={b.review_count} rating={b.rating}/> */}
//              <p>{b.price} {tags}</p>
//              {/* <p>{b.type} {tags}</p> */}
//              <h3>Type: {b.type} {tags}</h3>
//              <h3>Location: {addressLines}</h3>
//          </div>
//          <section className="call-btn">
//              {b.phone && <a href={callNumber}><img className="call-img" alt="Call" src={require("././images/call.png")}/></a>}
//          </section>
//      </div>
//  )
// }


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
                {props.imageUrl && <img className="img" alt={props.name} src={props.imageUrl}/>}
            </section>
            <section className="info">
                <h2>{props.name}</h2>
                <h3>Type: {props.type}</h3>
                <h3>Location: {props.address}</h3>
                <h3>Hours: {props.openingTime}:00am - {closingTwelveHour}:00pm</h3>
                <h3 className="sign">{isOpen ? 'Open Now' : 'Closed'}</h3>  
            </section>
            <section className="call-btn">
            {props.phone && <a href={callNumber}><img className="call-img" alt="Call" src={require("././images/call.png")}/></a>}
            </section>

        </div>
    )
}
