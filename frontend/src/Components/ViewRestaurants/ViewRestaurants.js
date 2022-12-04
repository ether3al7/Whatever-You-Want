import React from "react"
import Restaurant from "./Restaurant"
import Search from "./Search";
import './ViewRestaurants.css';

export default function ViewRestaurants(props){
    // const restaurantList = props.restaurants;
    const arr = {};
    const rest = arr.restaurants;
  

    const restaurants = props.restaurants.map(
    
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
        <div className="list">
            {restaurants}
        </div>
    )
}
