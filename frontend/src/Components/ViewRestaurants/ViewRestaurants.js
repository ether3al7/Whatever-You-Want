import React from "react"
import Restaurant from "./Restaurant"
import Search from "./Search";
import './ViewRestaurants.css';

export default function ViewRestaurants(props){
    // const restaurantList = props.restaurants;
    


    const restaurants = props.restaurants.map(
        // const restaurants = restaurantList.map(
    
        restaurant =>{
           return (
                <Restaurant 
                    key={restaurant.location_id}
                    {...restaurant}
                />
           )
        }
     )

    return (
        <div>
            {restaurants}
        </div>
    )
}
