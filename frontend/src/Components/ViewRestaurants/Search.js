import React from 'react'

export default function Search() {

    const [location, setLocation] = React.useState({city: "", zipcode: ""})

    function submitLocationToApi(){
        /** Code to fetch from Api */
    }
    
    function handleClick(event){
        event.preventDefault()
        submitLocationToApi(location)
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setLocation(prevLocation => {
            return {
                ...prevLocation,
                [name]: value
            }
        })
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <h3>To get started browsing restaurants please enter a city or zipcode.</h3>
            <input 
                type="text" 
                placeholder="Zipcode" 
                onChange={handleChange} 
                name="zipcode"
                value={location.zipcode}
            />
            <input 
                type="text" 
                placeholder="City" 
                onChange={handleChange} 
                name="city"
                value={location.city}
            />
            <button type="submit" onClick={handleClick}>Submit</button>
        </div>
    )
}
