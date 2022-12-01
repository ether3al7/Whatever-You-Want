import {Link, useRouteMatch,  } from 'react-router-dom'
// import SearchBar from '../ViewRestaurants/SearchBar'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import data from "../ViewRestaurants/data"
import React, { useCallback, useState } from 'react'
import { SearchData } from '../Search/SearchData'
import { SearchResult } from '../Search/SearchResult/SearchResult'
import Restaurants from '../ViewRestaurants/Restaurant'
import Search from '../ViewRestaurants/Search'
import { useContext } from 'react'



export default function Home() {
    

    const [needSearch, setNeedSearch] = React.useState(true)
    const [needView, setNeedView] = React.useState(false)
    const [location, setLocation] = React.useState({city: "", zipcode: ""})
    const [list, setList] = React.useState({})
    console.log(list);

    return(
      
        <div>

            {needView && <ViewRestaurants 
                restaurants={list}
                location={location}
            /> }
            {needSearch && <Search 
                setNeedSearch={setNeedSearch}
                setNeedView={setNeedView}
                location={location}
                setLocation={setLocation}
                list={list}
                setList={setList}
            />}

            
        </div>
    )
}
