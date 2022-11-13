import React from "react"
import Restaurant from "./Restaurant"

export default function ViewRestaurants(props){

    const restaurants = props.restaurants.map(
    
        restaurant =>{
           return (
                <Restaurant 
                    key={restaurant.id}
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