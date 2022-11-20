import { checkPropTypes } from 'prop-types'
import React from 'react'
import './Search.css';

export default function Search(props) {

    function submitLocationToApi(){
        /** Code to fetch from Api */
        props.setNeedSearch(prevNeedSearch => prevNeedSearch = !prevNeedSearch)
        props.setNeedView(prevNeedView => prevNeedView = !prevNeedView)
    }
    
    function handleClick(event){
        event.preventDefault()
        submitLocationToApi(props.location)
        
    }

    function handleChange(event){
        const {name, value} = event.target
        props.setLocation(prevLocation => {
            return {
                ...prevLocation,
                [name]: value
            }
        })
    }

    return (
        <div className="search">
            <section className='welcome'>
                <h1>Welcome!</h1>
                <img src={require('../../images/Whatever-4.png')} alt='main-logo'/>    
            </section>
            <section className='main'>
                <h3>To get started browsing restaurants please enter a city or zipcode.</h3>
                <section className='input'>
                    <input className='zipcode'
                        type="text" 
                        placeholder="Zipcode" 
                        onChange={handleChange} 
                        name="zipcode"
                        value={props.location.zipcode}
                    />
                    <input className='city'
                        type="text" 
                        placeholder="City" 
                        onChange={handleChange} 
                        name="city"
                        value={props.location.city}
                    />
                </section>
                <section className='submit'>
                    <button type="submit" onClick={handleClick}>Submit</button>
                </section>
            </section>   
        </div>
    )
}
