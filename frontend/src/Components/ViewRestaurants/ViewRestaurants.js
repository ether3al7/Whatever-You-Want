import React from "react"
import Restaurant from "./Restaurant"
import Search from "./Search";
import './ViewRestaurants.css';

export default function ViewRestaurants(props){



    // const restaurants = props.restaurants.map(
    
        const restaurant = () =>{
        //    return (
                <Restaurant 
                    key={restaurant.id}
                    {...restaurant}
                />
        //    )
        }
    //  )

    return (
        
        <div className="list">
            {restaurant}
        </div>
    )
}