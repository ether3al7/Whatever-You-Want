import {Link, useRouteMatch,  } from 'react-router-dom'
import SearchBar from '../ViewRestaurants/SearchBar'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import data from "../ViewRestaurants/data"
import React, { useCallback, useState } from 'react'
import { SearchData } from '../Search/SearchData'
import { SearchResult } from '../Search/SearchResult/SearchResult'
import Restaurants from '../ViewRestaurants/Restaurant'
import { useInRouterContext, useLocation, useMatch, useNavigate, useRoutes } from 'react-router'
import { Search } from '../Search/Search'
import { useContext } from 'react'







export default function Home() {
    // const { history } = useInRouterContext();
	
	  // function search(term, location) {
	  //   const urlEncodedTerm = encodeURI(term);
	  //   const urlEncodedLocation = encodeURI(location);
	  //   history.push(
	  //     `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
	  //   );
	  // }
    

    // const [needSearch, setNeedSearch] = React.useState(true)
    // const [needView, setNeedView] = React.useState(false)
    // const [location, setLocation] = React.useState({city: "", zipcode: ""})

   

<<<<<<< HEAD
    const [needSearch, setNeedSearch] = React.useState(true)
    const [needView, setNeedView] = React.useState(false)
    const [location, setLocation] = React.useState({city: "", zipcode: ""})
    const [list, setList] = React.useState({})
=======
>>>>>>> 880b929e0cb9b4426c8e9b0f89043cffcda075e8

    return(
      
        <div>
<<<<<<< HEAD
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
=======
         <SearchBar />
         {/* <Search search={search} /> */}
            
>>>>>>> 880b929e0cb9b4426c8e9b0f89043cffcda075e8
        </div>
    )
}
